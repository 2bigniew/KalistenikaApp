(function(){
    
    angular
        .module("KalistenikaApp")
        .factory("DataService", DataFactory);
    
        
        function DataFactory(){
            var dataObj = {
                exercisesData: exercisesData,
                quizQuestions: quizQuestions,
                correctAnswers: correctAnswers
            };
            
            return dataObj;
        }
    
    var correctAnswers = [1, 2, 3, 0, 2, 0, 3, 2, 0, 3];
    
    var quizQuestions = [
        {
            type: "text",
            text: "This is the content of question 1",
            possibilities: [
                {
                    answer: "question 1 answer 1"
                },
                {
                    answer: "question 1 answer 2"
                },
                {
                    answer: "question 1 answer 3"
                },
                {
                    answer: "question 1 answer 4"
                }
            ],
            selected: null,
            correct: null
            
        },
        {
            type: "text",
            text: "This is the content of question 2",
            possibilities: [
                {
                    answer: "question 2 answer 1"
                },
                {
                    answer: "question 2 answer 2"
                },
                {
                    answer: "question 2 answer 3"
                },
                {
                    answer: "question 2 answer 4"
                }
            ],
            selected: null,
            correct: null
            
        },
        {
            type: "text",
            text: "This is the content of question 3",
            possibilities: [
                {
                    answer: "question 3 answer 1"
                },
                {
                    answer: "question 3 answer 2"
                },
                {
                    answer: "question 3 answer 3"
                },
                {
                    answer: "question 3 answer 4"
                }
            ],
            selected: null,
            correct: null
            
        },
        {
            type: "text",
            text: "This is the content of question 4",
            possibilities: [
                {
                    answer: "question 4 answer 1"
                },
                {
                    answer: "question 4 answer 2"
                },
                {
                    answer: "question 4 answer 3"
                },
                {
                    answer: "question 4 answer 4"
                }
            ],
            selected: null,
            correct: null
            
        },
        {
            type: "image",
            text: "This is the content of question 5",
            possibilities: [
                {
                    answer: "http://i1.wp.com/www.myprotein.com/thezone/wp-content/uploads/2016/05/squatmuscles.jpg?resize=348%2C177"
                },
                {
                    answer: "https://static1.squarespace.com/static/57620587f7e0ab9b6d6b86e8/t/58d18cf42994ca0e80dc1348/1490128119434/"
                },
                {
                    answer: "https://s-media-cache-ak0.pinimg.com/originals/3d/73/a8/3d73a801418004c240eccc47c0157d3b.jpg"
                },
                {
                    answer: "https://i.pinimg.com/736x/ef/bb/48/efbb48f5c065d369203ef3150b2ba978--abdominal-muscles-fitness-weightloss.jpg"
                }
            ],
            selected: null,
            correct: null
            
        },
        {
            type: "text",
            text: "This is the content of question 6",
            possibilities: [
                {
                    answer: "question 6 answer 1"
                },
                {
                    answer: "question 6 answer 2"
                },
                {
                    answer: "question 6 answer 3"
                },
                {
                    answer: "question 6 answer 4"
                }
            ],
            selected: null,
            correct: null
            
        },
        {
            type: "text",
            text: "This is the content of question 7",
            possibilities: [
                {
                    answer: "question 7 answer 1"
                },
                {
                    answer: "question 7 answer 2"
                },
                {
                    answer: "question 7 answer 3"
                },
                {
                    answer: "question 7 answer 4"
                }
            ],
            selected: null,
            correct: null
            
        },
        {
            type: "text",
            text: "This is the content of question 8",
            possibilities: [
                {
                    answer: "question 8 answer 1"
                },
                {
                    answer: "question 8 answer 2"
                },
                {
                    answer: "question 8 answer 3"
                },
                {
                    answer: "question 8 answer 4"
                }
            ],
            selected: null,
            correct: null
            
        },
        {
            type: "text",
            text: "This is the content of question 9",
            possibilities: [
                {
                    answer: "question 9 answer 1"
                },
                {
                    answer: "question 9 answer 2"
                },
                {
                    answer: "question 9 answer 3"
                },
                {
                    answer: "question 9 answer 4"
                }
            ],
            selected: null,
            correct: null
            
        },
        {
            type: "text",
            text: "This is the content of question 10",
            possibilities: [
                {
                    answer: "question 10 answer 1"
                },
                {
                    answer: "question 10 answer 2"
                },
                {
                    answer: "question 10 answer 3"
                },
                {
                    answer: "question 10 answer 4"
                }
            ],
            selected: null,
            correct: null
            
        }
        ]
    
    var exercisesData = [
    
    {
        title: "Rodzaj ćwiczenia",
        type: "Pompki",
        muscles: "Klatka piersiowa, triceps",
        zalety: "Można wykonać wszędzie i w każdej chwili, może służyc jako ćwiczenie główne, lub jako ćwiczenie uzupełniające",
        wady: "Sprawiają wrażenie powolnego progresu",
        wariacje: "Pompki na poręczach, pompki z nogami na podwyższeniu, pompki diamentowe, pompki na jednej ręce, pompki z klaśnięciem, pompki z podskokiem",
        img_URL: "https://static1.squarespace.com/static/57620587f7e0ab9b6d6b86e8/t/58d18cf42994ca0e80dc1348/1490128119434/" ,
        opis: "Pompka - popularna nazwa ćwiczenia fizycznego wykonywanego w pozycji poziomej, twarzą do ziemi, polegającego na podnoszeniu i obniżaniu tułowia. Wykonywanie pompek rozwija mięśnie piersiowe i mięsień trójgłowy ramienia (pot. triceps), a także mięsień naramienny, mięsień zębaty przedni i mięsień kruczo-ramienny (jeżeli chcesz ćwiczyć pompki, musisz rozgrzać przynajmniej mięśnie rąk i brzucha, aby nie doznać kontuzji). Pompki odgrywają dużą rolę w treningu sportowców, szkoleniu żołnierzy jak i wychowaniu fizycznym. Jako tzw. giby są również popularnym ćwiczeniem w zakładach karnych i aresztach.Należy przestrzegać kilku podstawowych zasad, żeby prawidłowo wykonywać klasyczne pompki: ciało powinno być wyprostowane (bardzo częsty błąd), stopy powinny być ułożone blisko siebie (należy opierać się na palcach), ręce powinny być ułożone nieco szerzej niż klatka piersiowa, dłonie lekko odchylone na zewnątrz, należy opuszczać tułów do momentu, aż w stawie łokciowym utworzy się kąt prosty (przy czym plecy mają być cały czas proste"
    },
        
    {
        title: "Rodzaj ćwiczenia",
        type: "Podciągnięcia nachwytem",
        muscles: "Najszerszy grzbietu, biceps, mięśnie brzucha",
        zalety: "Duży progres siłowy, buduje mięśnie i poszerza sylwetkę, trenuje całe ciało",
        wady: "Trudno zacząć, potrzebny jest drążek",
        wariacje: "Podciągnięcia nachwytem szerokim, podciągnięcia podchwytem, wydłużanie ruchu opuszczania się, podciągnięcia wąskim podchwytem z nogami wyprostowanymi przed sylwetką",
        img_URL: "https://s-media-cache-ak0.pinimg.com/originals/3d/73/a8/3d73a801418004c240eccc47c0157d3b.jpg" ,
        opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget mollis elit, et ornare eros. Donec vestibulum, dui sed ultrices varius, felis nisl ullamcorper mauris, ac egestas dui neque ut felis. Nam id magna nisl. Sed ac ullamcorper nulla, vitae tristique risus. Vestibulum quis dictum ipsum. Fusce scelerisque, mi non venenatis tempus, elit felis tincidunt nisl, scelerisque consequat ex urna ut lorem. Phasellus sed tellus congue turpis maximus commodo a vel est. Ut eu porttitor arcu. Vivamus rhoncus luctus diam lacinia mollis. Sed sit amet viverra libero, et dictum felis. Mauris vitae libero finibus, eleifend mauris et, iaculis eros. Donec tempus libero sit amet erat faucibus, sit amet ullamcorper massa eleifend. Morbi et aliquam sem, ut hendrerit eros. Suspendisse eget scelerisque dui, quis viverra dui. Quisque dui ligula, condimentum quis molestie in, eleifend consequat ligula. Sed sapien arcu, dictum ut sagittis vel, dictum at risus. Sed sodales est quis nibh faucibus, sit amet viverra dolor semper. Ut in metus leo. Suspendisse pulvinar odio mauris. Donec nibh dui, imperdiet sit amet commodo et, lacinia ut massa. Quisque consequat lobortis luctus. Phasellus vel viverra odio, a tincidunt orci. Mauris vitae lectus ante. Ut maximus finibus augue, ac blandit mauris. Integer non elementum dui, sit amet accumsan neque. Quisque ligula quam, feugiat vel tristique in, lobortis non ex. Nam in consequat lacus. Etiam sed mauris nec velit scelerisque efficitur. Curabitur sed vulputate diam."
    },
        
    {
        title: "Rodzaj ćwiczenia",
        type: "Przysiady",
        muscles: "Pośladki, dwugłowy uda",
        zalety: "Można wykonać wszędzie i w każdej chwili, może służyc jako ćwiczenie główne, lub jako ćwiczenie uzupełniające",
        wady: "Sprawiają wrażenie powolnego progresu",
        wariacje: "Przysiady z podkoskiem, przysiady na jednej nodze",
        img_URL: "http://i1.wp.com/www.myprotein.com/thezone/wp-content/uploads/2016/05/squatmuscles.jpg?resize=348%2C177" ,
        opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget mollis elit, et ornare eros. Donec vestibulum, dui sed ultrices varius, felis nisl ullamcorper mauris, ac egestas dui neque ut felis. Nam id magna nisl. Sed ac ullamcorper nulla, vitae tristique risus. Vestibulum quis dictum ipsum. Fusce scelerisque, mi non venenatis tempus, elit felis tincidunt nisl, scelerisque consequat ex urna ut lorem. Phasellus sed tellus congue turpis maximus commodo a vel est. Ut eu porttitor arcu. Vivamus rhoncus luctus diam lacinia mollis. Sed sit amet viverra libero, et dictum felis. Mauris vitae libero finibus, eleifend mauris et, iaculis eros. Donec tempus libero sit amet erat faucibus, sit amet ullamcorper massa eleifend. Morbi et aliquam sem, ut hendrerit eros. Suspendisse eget scelerisque dui, quis viverra dui. Quisque dui ligula, condimentum quis molestie in, eleifend consequat ligula. Sed sapien arcu, dictum ut sagittis vel, dictum at risus. Sed sodales est quis nibh faucibus, sit amet viverra dolor semper. Ut in metus leo. Suspendisse pulvinar odio mauris. Donec nibh dui, imperdiet sit amet commodo et, lacinia ut massa. Quisque consequat lobortis luctus. Phasellus vel viverra odio, a tincidunt orci. Mauris vitae lectus ante. Ut maximus finibus augue, ac blandit mauris. Integer non elementum dui, sit amet accumsan neque. Quisque ligula quam, feugiat vel tristique in, lobortis non ex. Nam in consequat lacus. Etiam sed mauris nec velit scelerisque efficitur. Curabitur sed vulputate diam."
    },
        
    {
        title: "Rodzaj ćwiczenia",
        type: "Pompki w staniu na rękach",
        muscles: "Obręcz barkowa, mięśnie grzbietu, triceps",
        zalety: "Można wykonać wszędzie i w każdej chwili, mocny progres, baza wyjściowa do najtrudniejszych ćwiczeń",
        wady: "Bardzo trudno zacząć",
        wariacje: "Stanie na rękach, chodzenie na rękach, frogstand, stanie na jednej ręce ze zmianą ręki",
        img_URL: "http://crossfitamplify.com/wp-content/uploads/2015/07/tumblr_msdl5iOr4p1rlz4xxo1_1280.jpg" ,
        opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget mollis elit, et ornare eros. Donec vestibulum, dui sed ultrices varius, felis nisl ullamcorper mauris, ac egestas dui neque ut felis. Nam id magna nisl. Sed ac ullamcorper nulla, vitae tristique risus. Vestibulum quis dictum ipsum. Fusce scelerisque, mi non venenatis tempus, elit felis tincidunt nisl, scelerisque consequat ex urna ut lorem. Phasellus sed tellus congue turpis maximus commodo a vel est. Ut eu porttitor arcu. Vivamus rhoncus luctus diam lacinia mollis. Sed sit amet viverra libero, et dictum felis. Mauris vitae libero finibus, eleifend mauris et, iaculis eros. Donec tempus libero sit amet erat faucibus, sit amet ullamcorper massa eleifend. Morbi et aliquam sem, ut hendrerit eros. Suspendisse eget scelerisque dui, quis viverra dui. Quisque dui ligula, condimentum quis molestie in, eleifend consequat ligula. Sed sapien arcu, dictum ut sagittis vel, dictum at risus. Sed sodales est quis nibh faucibus, sit amet viverra dolor semper. Ut in metus leo. Suspendisse pulvinar odio mauris. Donec nibh dui, imperdiet sit amet commodo et, lacinia ut massa. Quisque consequat lobortis luctus. Phasellus vel viverra odio, a tincidunt orci. Mauris vitae lectus ante. Ut maximus finibus augue, ac blandit mauris. Integer non elementum dui, sit amet accumsan neque. Quisque ligula quam, feugiat vel tristique in, lobortis non ex. Nam in consequat lacus. Etiam sed mauris nec velit scelerisque efficitur. Curabitur sed vulputate diam."
    },
        
    {
        title: "Rodzaj ćwiczenia",
        type: "Wznosy nóg",
        muscles: "Brzuch",
        zalety: "Bardzo krótki czas regeneracji mięśni brzucha",
        wady: "Potrzebny drążek, lub poręcze.",
        wariacje: "wznosy nóg prostych, wznosy nóg ugiętych, okręcenie tłowia utrzymując nogi prostopadle dodrążka, podnoszenie bioder w zwisie oburącz",
        img_URL: "https://i.pinimg.com/736x/ef/bb/48/efbb48f5c065d369203ef3150b2ba978--abdominal-muscles-fitness-weightloss.jpg" ,
        opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget mollis elit, et ornare eros. Donec vestibulum, dui sed ultrices varius, felis nisl ullamcorper mauris, ac egestas dui neque ut felis. Nam id magna nisl. Sed ac ullamcorper nulla, vitae tristique risus. Vestibulum quis dictum ipsum. Fusce scelerisque, mi non venenatis tempus, elit felis tincidunt nisl, scelerisque consequat ex urna ut lorem. Phasellus sed tellus congue turpis maximus commodo a vel est. Ut eu porttitor arcu. Vivamus rhoncus luctus diam lacinia mollis. Sed sit amet viverra libero, et dictum felis. Mauris vitae libero finibus, eleifend mauris et, iaculis eros. Donec tempus libero sit amet erat faucibus, sit amet ullamcorper massa eleifend. Morbi et aliquam sem, ut hendrerit eros. Suspendisse eget scelerisque dui, quis viverra dui. Quisque dui ligula, condimentum quis molestie in, eleifend consequat ligula. Sed sapien arcu, dictum ut sagittis vel, dictum at risus. Sed sodales est quis nibh faucibus, sit amet viverra dolor semper. Ut in metus leo. Suspendisse pulvinar odio mauris. Donec nibh dui, imperdiet sit amet commodo et, lacinia ut massa. Quisque consequat lobortis luctus. Phasellus vel viverra odio, a tincidunt orci. Mauris vitae lectus ante. Ut maximus finibus augue, ac blandit mauris. Integer non elementum dui, sit amet accumsan neque. Quisque ligula quam, feugiat vel tristique in, lobortis non ex. Nam in consequat lacus. Etiam sed mauris nec velit scelerisque efficitur. Curabitur sed vulputate diam."
        
    },
        
    {
        title: "Rodzaj ćwiczenia",
        type: "Mostki",
        muscles: "Grzbiet, łydki, pośladki",
        zalety: "Można wykonać wszędzie i w każdej chwili, może służyc jako ćwiczenie główne, lub jako ćwiczenie uzupełniające",
        wady: "Łatwo o kontuzje, potrzeba intensywnej rozgrzewki pleców i barków",
        wariacje: "...",
        img_URL: "https://i.pinimg.com/736x/9d/ea/a7/9deaa74df411a82bbdb9068450ee2512--lungs-yoga-anatomy.jpg" ,
        opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget mollis elit, et ornare eros. Donec vestibulum, dui sed ultrices varius, felis nisl ullamcorper mauris, ac egestas dui neque ut felis. Nam id magna nisl. Sed ac ullamcorper nulla, vitae tristique risus. Vestibulum quis dictum ipsum. Fusce scelerisque, mi non venenatis tempus, elit felis tincidunt nisl, scelerisque consequat ex urna ut lorem. Phasellus sed tellus congue turpis maximus commodo a vel est. Ut eu porttitor arcu. Vivamus rhoncus luctus diam lacinia mollis. Sed sit amet viverra libero, et dictum felis. Mauris vitae libero finibus, eleifend mauris et, iaculis eros. Donec tempus libero sit amet erat faucibus, sit amet ullamcorper massa eleifend. Morbi et aliquam sem, ut hendrerit eros. Suspendisse eget scelerisque dui, quis viverra dui. Quisque dui ligula, condimentum quis molestie in, eleifend consequat ligula. Sed sapien arcu, dictum ut sagittis vel, dictum at risus. Sed sodales est quis nibh faucibus, sit amet viverra dolor semper. Ut in metus leo. Suspendisse pulvinar odio mauris. Donec nibh dui, imperdiet sit amet commodo et, lacinia ut massa. Quisque consequat lobortis luctus. Phasellus vel viverra odio, a tincidunt orci. Mauris vitae lectus ante. Ut maximus finibus augue, ac blandit mauris. Integer non elementum dui, sit amet accumsan neque. Quisque ligula quam, feugiat vel tristique in, lobortis non ex. Nam in consequat lacus. Etiam sed mauris nec velit scelerisque efficitur. Curabitur sed vulputate diam."
        
    },
        
]
    
}) ();