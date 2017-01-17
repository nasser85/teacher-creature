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




	return interfaceFactory;
})