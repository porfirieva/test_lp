ymaps.ready(init);
function init() {
	// Создание карты.
	let myMap = new ymaps.Map('map', {
		// Координаты центра карты.
		// Порядок по умолчанию: «широта, долгота».
		// Чтобы не определять координаты центра карты вручную,
		// воспользуйтесь инструментом Определение координат.
		center: [54.895626, 83.111268],
		// Уровень масштабирования. Допустимые значения:
		// от 0 (весь мир) до 19.
		zoom: 15,
	});

	// Создаем геообъект с типом геометрии "Точка".
	(myGeoObject = new ymaps.GeoObject(
		{
			// Описание геометрии.
			geometry: {
				type: 'Point',
				coordinates: [55.8, 37.8],
			},
			// Свойства.
			properties: {
				// Контент метки.
				iconContent: 'Я тащусь',
				hintContent: 'Ну давай уже тащи',
			},
		},
		{
			// Опции.
			// Иконка метки будет растягиваться под размер ее содержимого.
			preset: 'islands#blackStretchyIcon',
			// Метку можно перемещать.
			draggable: true,
		}
	)),
		(myPieChart = new ymaps.Placemark(
			[55.847, 37.6],
			{
				// Данные для построения диаграммы.
				data: [
					{ weight: 8, color: '#0E4779' },
					{ weight: 6, color: '#1E98FF' },
					{ weight: 4, color: '#82CDFF' },
				],
				iconCaption: 'Диаграмма',
			},
			{
				// Зададим произвольный макет метки.
				iconLayout: 'default#pieChart',
				// Радиус диаграммы в пикселях.
				iconPieChartRadius: 30,
				// Радиус центральной части макета.
				iconPieChartCoreRadius: 10,
				// Стиль заливки центральной части.
				iconPieChartCoreFillStyle: '#ffffff',
				// Cтиль линий-разделителей секторов и внешней обводки диаграммы.
				iconPieChartStrokeStyle: '#ffffff',
				// Ширина линий-разделителей секторов и внешней обводки диаграммы.
				iconPieChartStrokeWidth: 3,
				// Максимальная ширина подписи метки.
				iconPieChartCaptionMaxWidth: 200,
			}
		));
	myMap.geoObjects
		.add(myGeoObject)
		.add(myPieChart)
		.add(
			new ymaps.Placemark(
				[54.895626, 83.111268],
				{
					balloonContent: 'цвет <strong>воды пляжа бонди</strong>',
				},
				{
					preset: 'islands#icon',
					iconColor: '#0095b6',
				}
			)
		);
}

let burger = document.querySelector('.burger');
const widthScreen = window.innerWidth;
if ((burger.style.display = 'block') && widthScreen < 1024) {
	let btn = document.querySelector('.fixed-header__btn');
	btn.textContent = '';
	btn.setAttribute('style', 'padding: 16px;background-position: center;');
}
if ((burger.style.display = 'block') && widthScreen < 768) {
	let phone = document.querySelector('.fixed-header__phone');
	phone.textContent = '';
	phone.classList.add('square');
}

burger.addEventListener('click', event => {
	event.stopPropagation();
	event.currentTarget.classList.toggle('active');
	document.querySelector('.menu-hidden').classList.toggle('visible');
	document.querySelector('.menu-hidden__bg').classList.toggle('visible');
	document.querySelector('.main').classList.toggle('invisible');
	document.body.classList.toggle('hidden');
});

window.addEventListener('scroll', isMenuHide);
function isMenuHide() {
	let menuHeight = document.querySelector('.menu').clientHeight;
	let header = document.querySelector('.header');
	if (menuHeight <= this.scrollY + 19) {
		burger.style.display = 'block';
		header.classList.add('shadow');
	} else {
		burger.style.display = 'none';
		header.classList.remove('shadow');
	}
}
isMenuHide();

let hiddenArray = document.querySelector('.menu-header__list');
let arrayLength = hiddenArray.children.length;

if (widthScreen < 700) {
	hiddenArray.style.display = 'none';
	hiddenArray.style.overflow = 'hidden';
	document.querySelector('.menu-header__logo').style.display = 'none';
	document.querySelector('.fixed-header__list').style.display = 'none';
	document.querySelector('.menu-header__logo-mobile').style.display = 'block';
	document.querySelector('.menu').style.padding = '0';
	burger.style.display = 'block';
	window.removeEventListener('scroll', isMenuHide);
} else if (widthScreen < 767) {
	hiddenArray.style.display = 'none';
	hiddenArray.style.overflow = 'hidden';
	document.querySelector('.menu-header__logo').style.display = 'none';
	document.querySelector('.menu').style.padding = '0';
	burger.style.display = 'block';
	window.removeEventListener('scroll', isMenuHide);
} else if (widthScreen < 940) {
	hiddenArray.children[arrayLength - 1].style.display = 'none';
	hiddenArray.children[arrayLength - 2].style.display = 'none';
	hiddenArray.children[arrayLength - 3].style.display = 'none';
	let showMore = document.createElement('li');
	showMore.classList.add('menu-header__item');
	showMore.textContent = 'Еще';
	hiddenArray.append(showMore);
	hiddenArray.style.overflow = 'hidden';
} else if (widthScreen < 1200) {
	hiddenArray.children[arrayLength - 1].style.display = 'none';
	hiddenArray.children[arrayLength - 2].style.display = 'none';
	let showMore = document.createElement('li');
	showMore.classList.add('menu-header__item');
	showMore.textContent = 'Еще';
	hiddenArray.append(showMore);
	hiddenArray.style.overflow = 'hidden';
} else if (widthScreen < 1200) {
}

let element = document.getElementById('phone');
let maskOptions = {
	mask: '+{7}(000)000-00-00',
	lazy: false,
};
let mask = new IMask(element, maskOptions);

document.addEventListener('DOMContentLoaded', function () {
	let acc = new Accordion('.accordion__list', {
		duration: 700,
		elementClass: 'accordion__item',
		triggerClass: 'accordion__top',
		panelClass: 'accordion__bottom',
	});
});
