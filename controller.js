app.controller('QuizController', function($scope) {
    $scope.questions = [
        {
            id: 1,
            text: "What is your favorite color?",
            options: [
                { text: "Blue", value: ["Cinderella", "Elsa","Merida"] },
                { text: "Yellow", value: ["Belle","Snow White"] },
                { text: "Green", value: ["Tiana","Anna","Jasmine"] },
                { text: "Purple", value: ["Rapunzel","Aurora"] },
				{ text: "Red", value: ["Ariel","Mulan"] },
				{ text: "Brown", value: ["Vanellope","Raya"] },
				{ text: "Orange", value: ["Pocahontas","Moana"] }
            ]
        },
        {
            id: 2,
            text: "What is your favorite hobby?",
            options: [
                { text: "Reading", value: ["Belle"] },
                { text: "Cooking", value: ["Tiana","Cinderella","Snow White"] },
                { text: "Singing", value: ["Elsa", "Cinderella","Pocahontas"] },
                { text: "Dancing", value: ["Cinderella","Anna","Ariel"] },
				{ text: "Drawing", value: ["Rapunzel"] },
				{ text: "Gardening", value: ["Rapunzel"] },
				{ text: "Writing", value: ["Jasmine"] },
				{ text: "Playing Games", value: ["Merida","Mulan","Vanellope"] },
				{ text: "Sleeping", value: ["Aurora","Anna"] },
				{ text: "Travelling", value: ["Moana","Raya"] }
            ]
        },
		{
            id: 3,
            text: "What kind of personality do you have?",
            options: [
                { text: "Introvert", value: ["Elsa","Cinderella","Aurora","Belle","Pocahontas"] },
                { text: "Extrovert", value: ["Rapunzel","Tiana","Anna","Snow White","Vanellope","Merida","Moana","Ariel"] },
                { text: "Ambivert", value: ["Jasmine","Mulan","Raya"] }
            ]
        },
		{
            id: 4,
            text: "What is your favorite food?",
            options: [
                { text: "Croissant", value: ["Belle","Rapunzel","Cinderella"] },
                { text: "Pizza", value: ["Tiana", "Pocahontas","Anna"] },
                { text: "Ramen", value: ["Elsa","Moana"] },
                { text: "Tacos", value: ["Anna","Ariel"] },
				{ text: "Kebab", value: ["Jasmine"] },
				{ text: "Dumplings", value: ["Mulan"] },
				{ text: "Burger", value: ["Merida"] },
				{ text: "Biriyani", value: ["Raya"] },
				{ text: "Icecream", value: ["Vanellope","Snow White"] }
            ]
        },
		{
            id: 5,
            text: "What is your height?",
            options: [
                { text: "5-5.3", value: ["Rapunzel","Snow White","Mulan","Jasmine"] },
                { text: "5.4-5.6", value: ["Tiana","Belle","Cinderella","Anna","Raya","Merida","Aurora","Ariel","Moana"] },
                { text: "5.7-5.10", value: ["Elsa","Pocahontas"] },
                { text: "Not in any of the ranges", value: ["Vanellope"] }
            ]
        },
		{
            id: 6,
            text: "What is your hair color?",
            options: [
                { text: "Blond", value: ["Rapunzel","Aurora","Elsa","Cinderella"] },
                { text: "Brown", value: ["Belle","Rapunzel"] },
                { text: "Red", value: ["Anna","Ariel","Merida"] },
                { text: "Black", value: ["Jasmine","Mulan","Tiana","Vanellope","Pocahontas","Raya","Snow White","Moana"] }
            ]
        },
		{
            id: 7,
            text: "Who is your favorite character?",
            options: [
                { text: "A superhero", value: ["Merida","Raya","Mulan","Jasmine","Ariel"] },
                { text: "A princess", value: ["Tiana","Belle","Cinderella","Anna","Rapunzel","Snow White"] },
                { text: "A family member", value: ["Elsa","Pocahontas","Moana"] },
                { text: "A celebrity", value: ["Vanellope","Aurora"] }
            ]
        },
		{
            id: 8,
            text: "What is favorite season?",
            options: [
                { text: "Summer", value: ["Rapunzel","Snow White","Anna","Tiana","Ariel"] },
                { text: "Fall", value: ["Belle","Merida","Raya"] },
                { text: "Winter", value: ["Elsa","Mulan","Vanellope","Jasmine"] },
                { text: "Spring", value: ["Cinderella","Moana","Belle","Aurora"] }
            ]
        },
		{
            id: 9,
            text: "Why humanity needs you?",
            options: [
                { text: "To heal", value: ["Rapunzel","Snow White","Cinderella","Tiana","Moana"] },
                { text: "To entertain", value: ["Vanellope","Anna","Ariel","Elsa"] },
                { text: "To love", value: ["Belle","Pocahontas","Jasmine","Aurora","Ariel"] },
                { text: "To fight", value: ["Merida","Raya","Mulan"] }
            ]
        },
		{
            id: 10,
            text: "Select your birthday month.",
            options: [
                { text: "January", value: ["Tiana"] },
                { text: "February", value: ["Cinderella","Ariel"] },
                { text: "March", value: ["Snow White","Belle"] },
                { text: "April", value: ["Pocahontas"] },
				{ text: "May", value: ["Rapunzel"] },
				{ text: "June", value: ["Anna","Moana"] },
				{ text: "July", value: ["Jasmine"] },
				{ text: "August", value: ["Raya","Merida"] },
				{ text: "September", value: ["Vanellope"] },
				{ text: "October", value: ["Aurora"] },
				{ text: "November", value: ["Mulan"] },
				{ text: "December", value: ["Elsa"] }
            ]
        },
        // Add more questions here
    ];

    $scope.answers = {};
    $scope.currentQuestionIndex = 0;
    $scope.quizCompleted = false;
    $scope.result = '';

    // Map princess names to image URLs
    $scope.princessImages = {
        "Cinderella": "images/cinderella.png",
        "Elsa": "images/elsa.jpg",
        "Belle": "images/belle.jpg",
        "Tiana": "images/tiana.jpg",
        "Ariel": "images/ariel.jpg",
		"Rapunzel": "images/rapunzel.jpg",
		"Snow White": "images/snow.jpg",
		"Vanellope": "images/venellope.jpg",
		"Mulan": "images/mulan.jpg",
		"Merida": "images/merida.jpg",
		"Aurora": "images/aurora.jpg",
		"Anna": "images/anna.jpg",
		"Pocahontas": "images/poca.jpg",
		"Raya": "images/raya.jpg",
		"Jasmine": "images/jas.jpg",
		"Moana": "images/moana.jpg"
    };

    $scope.nextQuestion = function() {
        if ($scope.currentQuestionIndex < $scope.questions.length - 1) {
            $scope.currentQuestionIndex++;
        }
    };

    $scope.prevQuestion = function() {
        if ($scope.currentQuestionIndex > 0) {
            $scope.currentQuestionIndex--;
        }
    };

    $scope.submitQuiz = function() {
        var princessCount = {};

        for (var key in $scope.answers) {
            if ($scope.answers.hasOwnProperty(key)) {
                var princesses = $scope.answers[key];
                if (princesses) {
                    princesses.forEach(function(princess) {
                        if (princessCount[princess]) {
                            princessCount[princess]++;
                        } else {
                            princessCount[princess] = 1;
                        }
                    });
                }
            }
        }

        var maxCount = 0;
        var tiedPrincesses = [];

        for (var princess in princessCount) {
            if (princessCount.hasOwnProperty(princess)) {
                if (princessCount[princess] > maxCount) {
                    maxCount = princessCount[princess];
                    tiedPrincesses = [princess];
                } else if (princessCount[princess] === maxCount) {
                    tiedPrincesses.push(princess);
                }
            }
        }

        if (tiedPrincesses.length === 1) {
            $scope.result = tiedPrincesses[0];
        } else {
            $scope.result = tiedPrincesses[Math.floor(Math.random() * tiedPrincesses.length)];
        }

        $scope.quizCompleted = true;
    };
});