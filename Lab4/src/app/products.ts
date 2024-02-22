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
        category: "phone",
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
        category: "whatch",
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
        category: "whatch",
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


];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/