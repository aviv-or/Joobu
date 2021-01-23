import Spruce from "@ryangjchandler/spruce";

Spruce.store("editor", {
	showPersonalDetails: false,
	showTimeline: true,
	showCareerCategories: true,
	showCreateEventDialog: false,
});

Spruce.store(
	"categories",
	{
		all: [
			{
				name: "💼 Career",
				showInResume: true,
			},
			{
				name: "🖊 Writing",
				showInResume: false,
			},
			{
				name: "🗣 Speaking",
				showInResume: false,
			},
		],
	},
	false
);

Spruce.store(
	"personalInfo",
	{
		firstName: undefined,
		lastName: undefined,
		email: undefined,
		phone: undefined,
		address: undefined,
		about: undefined,
	},
	true
);

Spruce.store(
	"events",
	{
		temp: {
			index: undefined,
			date: undefined,
			endDate: undefined,
			icon: undefined,
			title: undefined,
			description: undefined,
			category: "",
		},
		all: [],
	},
	true
);
