// Jira integration service

angular.module('firePokerApp').service('jiraService',function($http, $window){
    this.changeAssignee=function(user) {
        var req = {
            method: 'PUT',
            url: 'http://jira-web:8080/rest/api/2/issue/SS-52499',
            headers: {
                'Authorization': 'Basic aGhrdW1hcjpIYXIxOHlhZGF2QDExMQ==',
                'Content-Type': 'application/json'
                
            },
            data: {
                "fields": {
                    "assignee":{"name":user}
                }
             }
        }
    $http(req);

    }

    this.updateStoryPoints= function (story, jiraAuth) {
        var req = {
            method: 'PUT',
            url: 'http://jira-web:8080/rest/api/2/issue/'+story.title,
            headers: {
                'Authorization': 'Basic '+jiraAuth, 
                'Content-Type': 'application/json'
                
            },
            data: {
                "fields": {
                    "customfield_10002": story.points
                }
             }
        }
        $http(req).success(function(response){})
        .error(function(response,status){
            if(status == 401){
                //$window.open("http://jira-web:8080/login.jsp", "popup", "width=300,height=200,left=10,top=150");

            }
        });
           
        
    }

});