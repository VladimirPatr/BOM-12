const elem = $('.navigation__city');
const headerSign = $('.header__sign');


elem.css({
	backgroundColor: 'red',
	border: '3px solid black'
});


const modalBtn = $('.present__btn');
const modalClose = $('.modal-order__close');
const modalOrder = $('.modal-order');


modalBtn.click(function(){
	modalOrder.show(500);
});



const modalOrderInput = $('.modal-order__input');
const modalOrderTitle = $('.modal-order__title');

modalOrderInput.focus(function(){
	 modalOrderTitle
	.text(`Введите ${$(this).attr('placeholder').toLowerCase()}`)
});
modalOrderInput.blur(function(){
	 modalOrderTitle
	.text('Заполниете форму')
});

modalOrderInput.on('input', function(event){
	console.log(event.type)
});


const foo = function(){
	console.log(this);
};
$('.what-building__item').on('click',foo);


const foo2 = function(){
	$(this).animate(
	{
		width : '1000px'
	},
	3000, function(){
		alert('Hello')
	}	)
	}


// elem.on('click', foo2);

// $('.modal-order__form').submit(function(event){
// 	event.preventDefault();
// 	$.post('https://jsonplaceholder.typicode.com/todos', $(this).serialize())
// 		.then(function(data){
// 			console.log(data)
// 			return data
// 		})
// 		.then(function(request){
// 			console.log(request)
// 		})
// 		.catch(function(err){
// 			console.log(err)
// 		});

// 		});

$('.modal-order__form').submit(function(event){
	event.preventDefault();
	$.ajax({
		url: 'https://jsonplaceholder.typicode.com/todos',
		type: 'POST',
		data: $(this).serialize(),
		success(data) {
			console.log(data)
			modalOrderTitle.text('Спасибо, ваша заявка принята, номер заявки' + data.id)
			$('.modal-order__form').slideUp(300);
		},
		error(){
			modalOrderTitle.text('Что-то пошло не так, попробуйте позже')
		}
	})

});

// бургер меню

const closeBtn = $('.navigation__close');
const navigation = $('.navigation');

$('.header__burger').on('click', function() {
	navigation.animate({
		left: 0
	}, 500, function(){
		closeBtn.animate({
			opacity: 1,
		}, 300, 'swing');
	});
});



navigation.on('click', function(e) {

	const target = e.target;
	if (target.className == 'header__navigation navigation' || target.className == 'navigation__close') {
        navigation.animate({
		left: -400
		}, 500, function(){
			closeBtn.animate({
				opacity: 0,
			}, 300, 'swing');
		});


    }
	
});




