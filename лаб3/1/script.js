"use strict";

while (true) {


    let love = prompt('Ім\'я партнера?');
    if (love == null) {
        break;
    } else if(Number(love)){
		alert("Помилка введення!");
		continue;
	}
	
    let kids = prompt('Скільки дітей хочете?');
    if (kids == null) {
        break;
    } else if(!Number(kids)){
		alert("Помилка набору!");
		continue;
	}

	let job = prompt('Ваша професія?');
    if (job == null) {
        break;
    } else if(Number(job)){
		alert("Помилка введення!");
		continue;
	}
    
	let country = prompt('Ім\'я країни?');
    if (country == null) {
        break;
    } else if(Number(country)){
		alert("Помилка набору!");
		continue ;
	}
    
	while (true) {
        let choise = prompt(' Шлюб чи Робота?', 'Шлюб або Робота');
        if (choise == null) {
            break;
        }
        let result = confirm("Ви впевнені у своєму виборі?");
        if ( result == true ) {
            switch (choise) {
            case 'Шлюб':
                if ( kids == 1 ) {
                 alert(`Ви укладете шлюб з ${love} та у вас буде ${kids} дитина`);
                } else {
                alert(`Ви укладете шлюб з ${love} та у вас буде ${kids} дітей`); 
                } 
                
                 fail;
            case 'Робота':
                alert(`Ви переїдете у місто ${country} на посаду ${job}`);

                fail;

            default:
                alert('Виберіть одне!');

        }

        } else if ( result == false) {
            
            continue;
        }

    }
    
}

alert("Bye!");