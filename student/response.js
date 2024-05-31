function cleanInput(input) {
    // Remove special characters using a regular expression
    return input.replace(/[^\w\s]/gi, '');
}

function getBotResponse(input) {

    input = cleanInput(input.toLowerCase());

    // Simple responses
    if (input == "hello") {
        return "Hello!";
    } 
    else if (input == "where is finance office") {
        return "Finance office is located at Level 3";
    }
    else if (input == "where is surau") {
        return "Surau is located at Level 13";
    } 
    else if (input == "how many programmes is unikl miit provide") {
        return "UNIKL MIIT is provide 4 Programmes including Foundation, Diploma, Bachelor Degree, and Postgraduate Programme";
    }  
    else if (input == "what programmes is avaiable in bachelor degree") {
        return "Bachelor of Computer Engineering Technology (Computer Systems) with Honours, Bachelor of Computer Engineering Technology (Networking Systems) with Honours, Bachelor of Information Technology (Hons.) in Software Engineering, Bachelor of Information Technology (Hons) in Computer System Security, Bachelor of Multimedia Technology (Hons.) in Computer Animation, Bachelor of Multimedia Technology (Hons.) in Interactive Multimedia Design, Bachelor of Information Technology (Hons) in Internet of Things, Bachelor of Game Development Technology with Honours";
    } 
    else if (input == "what time is unikl office open") {
        return "UniKL office operation time is start at 9AM until 5PM every Monday until Friday";
    }
    else if (input == "where is software engineering lecture room") {
        return "Software engineering room is located at level 18 and 19";
    }
    else if (input == "where is library") {
        return "library is located at level 14";
    }
    else if (input == "bye") {
        return "Talk to you later!";
    } 
    else {
        return "I'm sorry i cant answer that! Ask in Status Page and wait for an answer for a moment. Thank you";
    }
}


