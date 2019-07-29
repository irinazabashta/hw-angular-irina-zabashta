import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'morse'
})

export class MorsePipe implements PipeTransform {
    transform(value: string): string {
        let codeMorse: string = "";
        for (let i:number = 0; i < value.length; i++) {
            let symbol = value.charAt(i).toLowerCase();
            switch (symbol) {
                case 'a':
                    codeMorse += '•- ';
                    break;
                case 'b':
                    codeMorse += '-••• ';
                    break;
                case 'c':
                    codeMorse += '-•-• ';
                    break;
                case 'd':
                    codeMorse += '-•• ';
                    break;
                case 'e':
                    codeMorse += '• ';
                    break;
                case 'f':
                    codeMorse += '••-• ';
                    break;
                case 'g':
                    codeMorse += '--• ';
                    break;
                case 'h':
                    codeMorse += '•••• ';
                    break;
                case 'i':
                    codeMorse += '•• ';
                    break;
                case 'j':
                    codeMorse += '•--- ';
                    break;
                case 'k':
                    codeMorse += '-•- ';
                    break;
                case 'l':
                    codeMorse += '•-•• ';
                    break;
                case 'm':
                    codeMorse += '-- ';
                    break;
                case 'n':
                    codeMorse += '-• ';
                    break;
                case 'o':
                    codeMorse += '--- ';
                    break;
                case 'p':
                    codeMorse += '•--• ';
                    break;
                case 'q':
                    codeMorse += '--•- ';
                    break;
                case 'r':
                    codeMorse += '•-• ';
                    break;
                case 's':
                    codeMorse += '••• ';
                    break;
                case 't':
                    codeMorse += '- ';
                    break;
                case 'u':
                    codeMorse += '••- ';
                    break;
                case 'v':
                    codeMorse += '•••- ';
                    break;
                case 'w':
                    codeMorse += '•-- ';
                    break;
                case 'x':
                    codeMorse += '-••- ';
                    break;
                case 'y':
                    codeMorse += '-•-- ';
                    break;
                case 'z':
                    codeMorse += '--•• ';
                    break;
                default:
                    break;
            }
        }
        return codeMorse;
    }
}
