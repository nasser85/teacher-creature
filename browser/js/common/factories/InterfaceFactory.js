app.factory('InterfaceFactory', function() {
	var interfaceFactory = {};

	interfaceFactory.classButtons = function() {
		return [
			        {
			            label: "Students",
			            icon: "supervisor_account"
			        },
			        {
			            label: "Assignments",
			            icon: "note_add"
			        },
			        {
			            label: "Exams",
			            icon: "spellcheck"
			        },
			        {
			            label: "Resources",
			            icon: "https"
			        },
			        {
			            label: "All Classes",
			            icon: "recent_actors"
			        },
			        {
			            label: "Mailbox",
			            icon: "markunread_mailbox"
			        }
			    ];
	}




	return interfaceFactory;
})