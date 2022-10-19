class ElectricalAppliance {
    constructor(name, hierarchy) {
        this.name = name;
        this.hierarchy = hierarchy;
    }

    calculatePower(kWt, h) {
        let e = kWt * h;
        console.log(`Потребляемая мощность прибора ${e} кВт`);
    }

    inSocket(bool) {
        if (bool)
            console.log('Прибор включен в розетку');
        else console.log('Прибор не подключен к розетке');
    }
}

class ApplianceType extends ElectricalAppliance {
    constructor(name, type) {
        super(name);
        this.type = type
    }

    inSocket(bool) {
        if (bool)
            console.log('Техника подключена к розетке');
        else console.log('Техника не подключена к розетке');
    }
}

const lamp = new ApplianceType('Camelion', 'Светодиодная');
const tv = new ElectricalAppliance('Телевизор', 'LG');

lamp.isLightbulb = function (bool) {
    if (bool)
        console.log('Лампа с лампочкой');
    else console.log('Лампа без лампочки');
}

tv.getChannel = function (num) {
    console.log(`Телевизор показывает ${num} канал`)
}

lamp.calculatePower(0.2, 4);
tv.calculatePower(70, 2);

lamp.inSocket(true);
tv.inSocket(false);

lamp.isLightbulb(true);
lamp.isLightbulb(false);

tv.getChannel(69);

console.log(lamp);