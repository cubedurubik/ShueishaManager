$(document).ready(function() {

    $("#btnProposition").click(function() {
        $("#proposition").empty();
        for (var i = 0; i < 6; i++) {
            $("#proposition").append("<p>" + generateTitle() + ", par " + generateAuthor() + " (Potentiel : " + generatePotentiel() + ")<p>");
        }


    });




    function generatePotentiel() {
        return Math.floor(Math.random() * 100) + 1;
    }

    function generateTitle() {
        var titles = ["The", "A", "An"];
        var adjectives = ["Great", "Big", "Small", "Tall", "Short", "Long", "Little", "Young", "Old", "Right", "Wrong", "Good", "Bad", "Happy", "Sad", "Fast", "Slow", "Early", "Late", "Hard", "Soft", "Heavy", "Light", "Strange", "Odd", "Plain", "Round", "Square", "Angry", "Clever", "Dirty", "Easy", "Famous", "Gifted", "Helpful", "Important", "Impossible", "Inexpensive", "Modern", "Powerful", "Rich", "Shy", "Talented", "Uninterested", "Vast", "Witty", "Brave", "Calm", "Delightful", "Eager", "Fierce", "Gentle", "Happy", "Jolly", "Kind", "Lively", "Nice", "Obedient", "Pleasant", "Proud", "Silly", "Thankful", "Victorious", "Witty", "Zealous", "Aggressive", "Agreeable", "Alert", "Alive", "Amused", "Angry", "Annoyed", "Annoying", "Anxious", "Arrogant", "Ashamed", "Attractive", "Average", "Awful", "Bad", "Beautiful", "Better", "Bewildered", "Black", "Bloody", "Blue", "Blue-eyed", "Blushing", "Bored", "Brainy", "Brave", "Breakable", "Bright", "Busy", "Calm", "Careful", "Cautious", "Charming", "Cheerful", "Clean", "Clear", "Clever", "Cloudy", "Clumsy", "Colorful", "Combative", "Comfortable", "Concerned", "Condemned", "Confused", "Cooperative", "Courageous", "Crazy", "Creepy", "Crowded", "Cruel", "Curious", "Cute", "Dangerous", "Dark", "Dead", "Defeated", "Defiant", "Delightful"]
        let nouns = ["Apple", "Apricot", "Avocado", "Banana", "Bilberry", "Blackberry", "Blackcurrant", "Blueberry", "Boysenberry", "Currant", "Cherry", "Cherimoya", "Cloudberry", "Coconut", "Cranberry", "Cucumber", "Damson", "Date", "Dragonfruit", "Durian", "Elderberry", "Feijoa", "Fig", "Goji berry", "Gooseberry", "Grape", "Raisin", "Grapefruit", "Guava", "Honeyberry", "Huckleberry", "Jabuticaba", "Jackfruit", "Jambul", "Jujube", "Juniper berry", "Kiwi fruit", "Kumquat", "Lemon", "Lime", "Loquat", "Lychee", "Mango", "Marion berry", "Melon", "Cantaloupe", "Honeydew", "Watermelon", "Miracle fruit", "Mulberry", "Nectarine", "Olive", "Orange", "Blood orange", "Clementine", "Mandarine", "Tangerine", "Papaya", "Passionfruit", "Peach", "Pear", "Persimmon", "Physalis", "Plum", "Prune", "Pineapple", "Pumpkin", "Pomegranate", "Pomelo", "Purple mangosteen", "Quince", "Raspberry", "Salmonberry", "Rambutan", "Redcurrant", "Salal berry", "Salak", "Satsuma", "Star fruit", "Strawberry", "Tamarillo", "Tamarind", "Tomato", "Ugli fruit", "Yuzu"];
        return titles[Math.floor(Math.random() * titles.length)] + " " + adjectives[Math.floor(Math.random() * adjectives.length)] + " " + nouns[Math.floor(Math.random() * nouns.length)];
    }

    function generateAuthor() {
        var names = ["John", "Paul", "George", "Ringo", "Michael", "Harry"];
        var surnames = ["Lennon", "McCartney", "Harrison", "Starr"];
        return names[Math.floor(Math.random() * names.length)] + " " + surnames[Math.floor(Math.random() * surnames.length)];
    }





});