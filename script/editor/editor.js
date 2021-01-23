import "../app";
import "./store";
import flatpickr from "flatpickr";
import Spruce from "@ryangjchandler/spruce";

const editor = {
	onload() {
		flatpickr("#date-input", {});
	},
	saveEvent() {
		const event = Spruce.stores.events.temp;

		if (!eventIsValid(event)) {
			alert("Please fill in all required fields");
			return;
		}

		if (event.index !== undefined) {
			Spruce.stores.events.all[event.index] = event;
		} else {
			const { index, ...rest } = event;
			Spruce.stores.events.all
				? Spruce.stores.events.all.push(rest)
				: (Spruce.stores.events.all = [rest]);
		}

		this.closeEventDialog();
	},
	deleteEvent() {
		if (confirm("Delete this event?")) {
			Spruce.stores.events.all.splice(Spruce.stores.events.temp.index, 1);
			this.closeEventDialog();
		}
	},
	newEvent() {
		resetTempEvent();
		Spruce.stores.editor.showCreateEventDialog = true;
	},
	editEvent(eventIndex) {
		const event = Spruce.stores.events.all[eventIndex];

		Spruce.stores.events.temp = {
			index: eventIndex,
			...event,
		};

		Spruce.stores.editor.showCreateEventDialog = true;
	},
	closeEventDialog() {
		Spruce.stores.editor.showCreateEventDialog = false;
		resetTempEvent();
	},
};

window.editor = editor;

const eventIsValid = (event) => {
	if (!event.title || event.title.trim() === "") return false;
	if (!event.description || event.description.trim() === "") return false;
	if (!event.date || event.date.trim() === "") return false;
	if (!event.category || event.category.trim() === "") return false;
	return true;
};

const resetTempEvent = () => {
	Spruce.stores.events.temp = {
		index: undefined,
		date: undefined,
		endDate: undefined,
		icon: undefined,
		title: undefined,
		description: undefined,
		category: Spruce.stores.categories.all[0].name,
	};
};
