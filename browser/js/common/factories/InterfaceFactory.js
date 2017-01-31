app.factory('InterfaceFactory', function() {
	var interfaceFactory = {};

	interfaceFactory.classButtons = function() {
		return [
			        {
			            label: "Students",
			            icon: "supervisor_account",
			            link: "students({classId: currentClass.id})"
			        },
			        {
			            label: "Assignments",
			            icon: "note_add",
			            link: "students({classId: currentClass.id})"
			        },
			        {
			            label: "Exams",
			            icon: "spellcheck",
			            link: "students({classId: currentClass.id})"
			        },
			        {
			            label: "Resources",
			            icon: "https",
			            link: "students({classId: currentClass.id})"
			        },
			        {
			            label: "All Classes",
			            icon: "recent_actors",
			            link: "students({classId: currentClass.id})"
			        },
			        {
			            label: "Mailbox",
			            icon: "markunread_mailbox",
			            link: "students({classId: currentClass.id})"
			        }
				];
	}

	interfaceFactory.siteFeatures = function() {
		return [
			        {
			            label: "Build Classes",
			            icon: "supervisor_account",
			            text: "Create classrooms to keep track of materials, student progress, and more."
			        },
			        {
			            label: "Design Lessons",
			            icon: "library_books",
			            text: "Streamline the process for designing engaging and interactive lessons."
			        },
			        {
			            label: "Get Analytics",
			            icon: "equalizer",
			            text: "Recieve real time data on student acheivement across different measures."
			        },
			        {
			            label: "Browse Resources",
			            icon: "view_carousel",
			            text: "Search through dozens or resources from teachers across the globe"
			        },
			        {
			            label: "Construct Exams",
			            icon: "spellcheck",
			            text: "Build common core aligned tests and quizzes."
			        },
			        {
			            label: "Contribute",
			            icon: "loyalty",
			            text: "Create and share test questions, study guides, and more."
			        }
				];
	}




	return interfaceFactory;
})