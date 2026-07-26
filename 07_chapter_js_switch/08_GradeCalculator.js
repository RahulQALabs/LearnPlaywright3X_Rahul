// Grade Calculator - Switch with true pattern
// Tests grade ranges without needing user input

function getGrade(score) {
    switch (true) {
        case (score >= 90):
            return "Outstanding : Top Performer";
        case (score >= 85):
            return "Excellent : Above Expectation";
        case (score >= 70):
            return "Good : Meet the Expectations";
        case (score >= 50):
            return "Average : Need Improvement";
        default:
            return "Unsatisfactory Result : Require Trainings";
    }
}

// Test cases
const testScores = [95, 88, 72, 65, 45, 100, 50, 89, 69];

testScores.forEach(score => {
    console.log(`Score: ${score} → ${getGrade(score)}`);
});
