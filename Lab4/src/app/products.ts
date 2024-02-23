export interface Product {
    id: number;
    image: string;
    name: string;
    description: string;
    rating: number;
    link: string;
    like: number;
}

export const products = [
    {
        id: 1,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h95/h0e/63961934823454.jpg?format=gallery-large',
        name: 'Зарядное устройство Apple 20W USB-C Power Adapter белый',
        description: 'тип: сетевая зарядка\n' +
            'количество подключаемых устройств: 1\n' +
            'быстрая зарядка: Да\n' +
            'разъем подключения: USB Type-C',
        rating: 4.5,
        link: "https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=750000000",
        category: "accessory",
        like: 0,
    },
    {
        id: 2,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-large',
        name: 'Смартфон Apple iPhone 13 128Gb Midnight черный',
        description: "технология NFC: Да\nцвет: черный\nтип экрана: OLED, Super Retina XDR\nдиагональ: 6.1 дюйм\nразмер оперативной памяти: 4 ГБ\nпроцессор: 6-ядерный Apple A15 Bionic\nобъем встроенной памяти: 128.0 ГБ\nемкость аккумулятора: 3095.0 мАч",
        rating: 5,
        link: "https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000",
        category: "phone",
        like: 0,
    },
    {
        id: 3,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-large',
        name: 'Смартфон Apple iPhone 14 128Gb черный',
        description: "технология NFC: Да\n" +
            "цвет: черный\n" +
            "тип экрана: OLED, Super Retina XDR display\n" +
            "диагональ: 6.1 дюйм\n" +
            "размер оперативной памяти: 6 ГБ\n" +
            "процессор: 6-ядерный Apple A15 Bionic\n" +
            "объем встроенной памяти: 128.0 ГБ\n" +
            "емкость аккумулятора: 3279.0 мАч",
        rating: 4.5,
        link: "https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000",
        category: "phone",
        like: 0,
    },
    {
        id: 4,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h02/ha0/79846423199774.jpg?format=gallery-large',
        name: 'Смартфон Xiaomi Redmi Note 12 Pro 4G 8 ГБ/256 ГБ серый',
        description: "технология NFC: Да\n" +
            "цвет: серый\n" +
            "тип экрана: AMOLED, сенсорный, мультитач\n" +
            "диагональ: 6.67 дюйм\n" +
            "размер оперативной памяти: 8 ГБ\n" +
            "процессор: 8-ядерный Qualcomm Snapdragon 732G\n" +
            "объем встроенной памяти: 256.0 ГБ\n" +
            "емкость аккумулятора: 5000.0 мАч",
        rating: 4.5,
        link: "https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000",
        category: "phone",
        like: 0,
    },
    {
        id: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hf5/hed/64420698554398.jpg?format=gallery-large',
        name: 'Смарт-часы COLMI P28 Plus золотистый-бежевый',
        description: "поддержка платформ: Android, ,iOS\n" +
            "цвет корпуса: золотистый\n" +
            "форма корпуса: прямоугольная\n" +
            "интерфейсы: Bluetooth\n" +
            "время работы: 3-7 дней",
        rating: 5,
        link: "https://kaspi.kz/shop/p/colmi-p28-plus-zolotistyi-bezhevyi-106175099/?c=750000000",
        category: "watch",
        like: 0,
    },
    {
        id: 6,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h62/h38/67432964784158.jpg?format=gallery-large',
        name: 'Чехол OEM для Apple iPhone 13 прозрачный',
        description: "тип: накладка\n" +
            "совместимый бренд: Apple\n" +
            "материал: силикон, ,пластик\n" +
            "совместимые модели: iPhone 13",
        rating: 5,
        link: "https://kaspi.kz/shop/p/oem-dlja-apple-iphone-13-prozrachnyi-108272841/?c=750000000",
        category: "accessory",
        like: 0,
    },
    {
        id: 7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hbd/h2f/63829403140126.jpg?format=gallery-large',
        name: 'Кабель Apple USB Type-C - Lightning 1 м',
        description: "разъемы: Apple Lightning (M), ,USB TypeC (M)\n" +
            "тип: кабель\n" +
            "длина: 1.0 м",
        rating: 4,
        link: "https://kaspi.kz/shop/p/kabel-apple-usb-type-c---lightning-1-m-40500508/?c=750000000",
        category: "accessory",
        like: 0,
    },
    {
        id: 8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hb0/h7e/63639753555998.jpg?format=gallery-large',
        name: 'Смарт-часы COLMI P28 Plus черный',
        description: "поддержка платформ: Android, ,iOS\n" +
            "цвет корпуса: черный\n" +
            "форма корпуса: прямоугольная\n" +
            "интерфейсы: Bluetooth\n" +
            "время работы: 3-7 дней",
        rating: 4.5,
        link: "https://kaspi.kz/shop/p/colmi-p28-plus-chernyi-106096505/?c=750000000",
        category: "watch",
        like: 0,
    },
    {
        id: 9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/ha9/h3b/67897720340510.jpg?format=gallery-large',
        name: 'Стекло для Apple iPhone 11',
        description: "тип: стекло\n" +
            "совместимый бренд: Apple\n" +
            "совместимые модели: iPhone 11\n" +
            "назначение: дисплей\n" +
            "вид покрытия: противоударное",
        rating: 4.5,
        link: "https://kaspi.kz/shop/p/steklo-dlja-apple-iphone-11-108450817/?c=750000000",
        category: "accessory",
        like: 0,
    },
    {
        id: 10,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h2e/h29/64381795991582.jpg?format=gallery-large',
        name: 'Держатель для телефона Ali17express 2291',
        description: "назначение: для смартфона\n" +
            "тип: держатель\n" +
            "место крепления держателя: универсальное, ,настольное\n" +
            "способ крепления держателя: зажим",
        rating: 4.5,
        link: "https://kaspi.kz/shop/p/ali17express-2291-104227273/?c=750000000",
        category: "accessory",
        like: 0,
    },
    {
        id: 11,
        name: "CASIO MTP-1374L-1AVDF",
        description: "Analog quartz wristwatch, steel case, non-shock-resistant, for men, black.",
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/ha1/ha8/63763581960222.jpg?format=gallery-medium",
        link: "https://kaspi.kz/shop/p/kvartsevye-casio-mtp-1374l-1avdf-stal--21400996/?c=750000000#!/item",
        category: "watch",
        like: 0,
    },
    {
        id: 12,
        name: "Часы Кварцевые 528706 титан, нержавеющая сталь",
        description: "способ отображения времени: аналоговый (стрелки)\n" +
            "тип: кварцевые\n" +
            "материал корпуса: титан, ,нержавеющая сталь\n" +
            "для кого: для женщин\n" +
            "цвет: серебристый",
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/h5a/h47/69016126193694.jpg?format=gallery-large",
        link: "https://kaspi.kz/shop/p/kvartsevye-528706-titan-nerzhavejuschaja-stal--108902460/?c=750000000",
        category: "watch",
        like: 0,
    },
    {
        id: 13,
        name: "Часы Кварцевые SKMEI 1251 пластик, нержавеющая сталь",
        description: "способ отображения времени: цифровой (электронный)\n" +
            "тип: кварцевые\n" +
            "материал корпуса: пластик, ,нержавеющая сталь\n" +
            "для кого: для мужчин\n" +
            "цвет: черный",
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/hc9/h6b/64410943324190.jpg?format=gallery-large",
        link: "https://kaspi.kz/shop/p/kvartsevye-skmei-1251-plastik-nerzhavejuschaja-stal--103561408/?c=750000000",
        category: "watch",
        like: 0,
    },
    {
        id: 14,
        name: "Apple iPhone 15 Pro 1Tb",
        description: "NFC Technology: Yes, Color: Blue, Screen Type: OLED, Super Retina XDR display, Diagonal: 6.1 inches, RAM Size: 8 GB, Processor: 6-core Apple A17 Pro, Internal Storage: 1024.0 GB, Battery Capacity: 3279.0 mAh.",
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/h26/hc5/83559836745758.jpg?format=gallery-medium",
        link: "https://kaspi.kz/shop/p/apple-iphone-15-pro-1tb-sinii-113138344/?c=750000000",
        category: "phone",
        like: 0,
    },
    {
        id: 15,
        name: 'Apple iPhone 14 Pro Max 256Gb Purple',
        description: 'NFC technology: Yes\n' +
            'color: purple\n' +
            'Screen type: OLED, Super Retina XDR display\n' +
            'diagonal: 6.7 inch\n' +
            'main memory size: 6GB\n' +
            'processor: 6-core Apple A16 Bionic\n' +
            'Built-in memory: 256GB\n' +
            'Battery capacity: 3095mAh',
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/h19/h85/64508108931102.jpg?format=gallery-medium",
        link: "https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item",
        category: "phone",
        like: 0,
    },
    {
        id: 16,
        name: "Apple iPhone 15 128Gb",
        description: "Apple iPhone 15 128Gb",
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/he2/h1d/83559338442782.png?format=gallery-medium",
        link: "https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000",
        category: "phone",
        like: 0,
    },
    {
        id: 17,
        name: "Системный блок KompTrust Comfort Game RTX черный",
        description: "установленная ОС: Win 11 Pro\n" +
            "процессор: Intel Core I5 - 10400F\n" +
            "размер оперативной памяти: 32.0 Гб\n" +
            "объем SSD: 1000.0 Гб\n" +
            "видеопроцессор: NVIDIA GeForce RTX 2060 SUPER\n" +
            "форм-фактор корпуса: Micro-Tower",
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/he3/he1/81461966143518.jpg?format=gallery-large",
        link: "https://kaspi.kz/shop/p/komptrust-comfort-game-rtx-chernyi-111077990/?c=750000000",
        category: "computer",
        like: 0,
    },
    {
        id: 18,
        name: "Системный блок UniComp Gaming-5 Pro белый\n" +
            " (98 ",
        description: "установленная ОС: Win 10\n" +
            "процессор: Intel Xeon E5 2670\n" +
            "размер оперативной памяти: 32.0 Гб\n" +
            "объем SSD: 512.0 Гб\n" +
            "видеопроцессор: NVIDIA GeForce GTX 1660\n" +
            "форм-фактор корпуса: Midi-Tower",
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/h56/h5d/69226582016030.jpg?format=gallery-large",
        link: "https://kaspi.kz/shop/p/unicomp-gaming-5-pro-belyi-108980574/?c=750000000",
        category: "computer",
        like: 0,
    },
    {
        id: 19,
        name: "Системный блок KompTrust Pro game белый",
        description: "установленная ОС: Win 11 Pro\n" +
            "процессор: Intel Core i5 10400f\n" +
            "размер оперативной памяти: 32.0 Гб\n" +
            "объем SSD: 512.0 Гб\n" +
            "видеопроцессор: NVIDIA GeForce GTX 1660 Super\n" +
            "форм-фактор корпуса: Micro-Tower",
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/ha3/h34/81178097844254.jpg?format=gallery-large",
        link: "https://kaspi.kz/shop/p/komptrust-pro-game-belyi-110770955/?c=750000000",
        category: "computer",
        like: 0,
    },
    {
        id: 20,
        name: "Системный блок PIXEL 13 черный",
        description: "установленная ОС: Win 10\n" +
            "процессор: Intel Core i5-10400F\n" +
            "размер оперативной памяти: 16.0 Гб\n" +
            "объем SSD: 512.0 Гб\n" +
            "видеопроцессор: NVIDIA GeForce RTX 3060\n" +
            "форм-фактор корпуса: Midi-Tower",
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/h89/h53/64048533897246.jpg?format=gallery-large",
        link: "https://kaspi.kz/shop/p/pixel-13-chernyi-103421555/?c=750000000",
        category: "computer",
        like: 0,
    },
    {
        id: 21,
        name: "Системный блок Empire Computers Gaming PRO 69 черный",
        description: "установленная ОС: Win 10\n" +
            "процессор: Intel Core i5 10400F\n" +
            "размер оперативной памяти: 16.0 Гб\n" +
            "объем SSD: 512.0 Гб\n" +
            "видеопроцессор: NVIDIA GeForce GTX 1050 Ti\n" +
            "форм-фактор корпуса: Midi-Tower",
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/hb5/hfa/68183485415454.jpg?format=gallery-large",
        link: "https://kaspi.kz/shop/p/empire-computers-gaming-pro-69-chernyi-108560458/?c=750000000",
        category: "computer",
        like: 0,
    },

];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/