app.factory('StandardsFactory', function($http, $state) {
	var standardsFactory = {};

	standardsFactory.fetchAll = function() {
		return $http.get('http://api.commonstandardsproject.com/api/v1/standard_sets/07DCF0D0CA8F49909681B815D879A8CC?api-key=jH2n3Pi2i3UeyNDRtU3Gy39V')
			.then(function(standards) {
				return standards.data.data;
			});
	}

	standardsFactory.getJurisdictions = function() {
		return $http.get('http://commonstandardsproject.com/api/v1/jurisdictions/?api-key=jH2n3Pi2i3UeyNDRtU3Gy39V')
			.then(function(jurisdictions) {
				return jurisdictions.data;
			})
	}

	standardsFactory.getOneJurisdiction = function() {
		return $http.get('http://commonstandardsproject.com/api/v1/jurisdictions/67810E9EF6944F9383DCC602A3484C23?api-key=jH2n3Pi2i3UeyNDRtU3Gy39V')
			.then(function(jurisdiction) {
				return jurisdiction.data.data.standardSets;
			})
	}

	standardsFactory.getGradeLevelsBySubject = function(all, subject) {
		var subjectTitle = "";
		if (subject == 'English') {
			subjectTitle = "Common Core English/Language Arts";
		} else if (subject == 'Math') {
			subjectTitle = "Common Core Mathematics";
		} else {
			subjectTitle = "English Language Arts - Science and Technical Subjects";
		}
		return all.filter(function(el){ return el.subject == subjectTitle}).sort();
	}

	standardsFactory.getStandardsByGrade = function(id) {
		return $http.get('http://api.commonstandardsproject.com/api/v1/standard_sets/' + id + '?api-key=jH2n3Pi2i3UeyNDRtU3Gy39V')
			.then(function(standards) {
				var arr = [];
				for (var key in standards.data.data.standards) {
					arr.push(standards.data.data.standards[key])
				};
				return arr;
			});
	}

	return standardsFactory;
})