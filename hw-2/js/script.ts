interface Converter {
    toSystem(n:number):string;
    fromSystem(n:string):number;
}

class ToBinary implements Converter{
    private radix:number = 2;

    toSystem(n:number):string {
        // dec -> bin
        return n.toString(this.radix);
    }

    fromSystem(n:string):number {
        // bin -> dec
        return parseInt(n, this.radix);
    }
}
//
class ToHexal implements Converter{
    private radix:number = 8;

    toSystem(n:number):string {
        // dec -> hex
        return n.toString(this.radix);
    }

    fromSystem(n:string):number {
        //hex -> dec
        return parseInt(n, this.radix);
    }
}

class ToHexidecimal implements Converter{
    private radix:number = 16;

    toSystem(n:number):string {
        // dec -> hexdec
        return n.toString(this.radix);
    }

    fromSystem(n:string):number {
        // hexdec -> dec
        return parseInt(n, this.radix);
    }
}

const binary:ToBinary = new ToBinary();
console.log(binary.toSystem(255));
console.log(binary.fromSystem('1001'));

const hexal:ToHexal = new ToHexal();
console.log(hexal.toSystem(255));

const hexidecimal: ToHexidecimal = new ToHexidecimal();
console.log(hexidecimal.toSystem(255));