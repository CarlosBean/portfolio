import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { TDocumentDefinitions } from 'pdfmake/interfaces';

const pdf = pdfMake;
pdf.vfs = pdfFonts.pdfMake.vfs;

@Injectable({ providedIn: 'root' })
export class CurriculumPDFService {

    avatarURL = '../../../assets/images/avatar-circle.png';
    certifications = [
        { name: "Angular de Cero a Experto", id: "UC-06N72Z6C", company: "Udemy" },
        { name: "Angular Avanzado", id: "UC-TDQ534HJ", company: "Udemy" },
        { name: "Node de Cero a Experto", id: "UC-Q7OQ1TKM", company: "Udemy" },
        { name: "RESTful Service PHP y MySQL", id: "UC-5A16YJC5", company: "Udemy" },
    ];

    content: any;
    styles: any;
    defaultStyle: any;

    personalWebURL = 'https://carlos-benavides.dev/';

    constructor(public translate: TranslateService) {
        this.styles = {
            header: { color: '#29b8e5', fontSize: 16, lineHeight: 1 },
            subheader: { color: '#343a40', fontSize: 15, lineHeight: 1.5 },
            lead: { bold: true, color: '#29b8e5' },
            ul: { bold: true, lineHeight: 1.5 },
            mb_1: { margin: [0, 0, 0, 5] },
            mb_2: { margin: [0, 0, 0, 10] },
            mb_3: { margin: [0, 0, 0, 15] },
            bold: { bold: true },
            right: { alignment: 'right' }
        };

        this.defaultStyle = {
            columnGap: 25,
            fontSize: 10,
            color: '#868e96',
            markerColor: '#29b8e5',
            lineHeight: 1.2,
        }
    }

    buildContent() {
        this.content = {
            columns: [
                {
                    stack: [
                        { image: '', width: 120, height: 120, margin: [0, 20], style: { alignment: 'center' } },

                        this.hline(27),

                        { style: 'subheader', text: this.translate.instant('main.contact') },
                        { style: 'lead', text: this.translate.instant('main.phone') },
                        { style: ['bold', 'mb_3'], text: '(57) 316 649 5876' },
                        { style: 'lead', text: 'Email' },
                        { style: ['bold', 'mb_3'], text: '1992cab@gmail.com' },
                        { style: 'lead', text: this.translate.instant('main.location') },
                        { style: ['bold', 'mb_3'], text: 'Palmira - Valle | Colombia' },
                        { style: 'lead', text: this.translate.instant('main.website') },
                        { style: ['bold', 'mb_3'], text: 'carlos-benavides.dev', link: this.personalWebURL },

                        this.hline(27),

                        { style: 'subheader', text: this.translate.instant('main.skills') },
                        {
                            style: ['ul', 'mb_3'],
                            ul: ['HTML', 'CSS', 'Java', 'Spring Boot', 'Javascript', 'NodeJs', 'Typescript', 'Angular', 'MySQL', 'Git']
                        },

                        this.hline(27),

                        { style: 'subheader', text: this.translate.instant('main.languages') },
                        {
                            style: ['ul', 'mb_3'],
                            ul: [
                                `${this.translate.instant('main.spanish')} - ${this.translate.instant('main.native')}`,
                                `${this.translate.instant('main.english')} - ${this.translate.instant('main.intermediate')}`
                            ]
                        },
                    ],
                    width: '27%'
                },
                {
                    stack: [
                        { style: ['header', 'mb_2'], text: 'CARLOS ANDRES\nBENAVIDES DE LA CRUZ' },
                        { style: 'subheader', text: this.translate.instant('main.summary') },
                        { style: 'mb_3', text: this.translate.instant('about.text') },

                        this.hline(70),

                        { style: 'subheader', text: this.translate.instant('main.experience') },
                        ...this.buildExperience(this.translate.instant('experience')),

                        this.hline(70),

                        { style: 'subheader', text: this.translate.instant('main.education') },
                        {
                            style: 'lead',
                            columns: [
                                'Tecnología de Análisis y Desarrollo de Sistemas',
                                { text: ' Sept 2016 - Sept 2018', style: 'right' },
                            ],
                        },
                        { style: ['bold', 'mb_3'], text: 'Servicio Nacional de Aprendizaje - SENA' },


                        this.hline(70),

                        { style: 'subheader', text: this.translate.instant('main.certifications') },
                        ...this.buildCertifications(this.certifications)
                    ]
                }
            ]
        };
    }

    hline(widthPercent: number) {
        widthPercent = widthPercent === undefined ? 100 : widthPercent;
        const length = 514 / 100 * widthPercent;
        const line = {
            margin: [0, 0, 0, 15],
            canvas: [{ type: "line", x1: 0, y1: 0, x2: length, y2: 0, lineWidth: 0.5, color: '#868e96' }]
        };
        return line;
    };

    buildExperience(data: any[]): any[] {
        return data.map(({ company, jobPosition, start, end, desc }) => {
            let date = `${start} - ${end}`;

            let stack = [
                { style: 'lead', columns: [jobPosition, { text: date, style: 'right' }] },
                { style: ['bold', 'mb_1'], text: company }
            ];

            stack.push(...desc);
            return { style: 'mb_3', stack };
        });
    };

    buildCertifications(data: any[]): any[] {
        return data.map(({ name, id, company }) => {
            return { bold: true, columns: [name, { text: `${company} | ${id}`, style: 'right' }] }
        });
    };

    getBase64ImageFromURL(url: string): Promise<any> {
        return new Promise((resolve, reject) => {
            let img = new Image();
            img.setAttribute("crossOrigin", "anonymous");
            img.onload = () => {
                let canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;

                let ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);

                let dataURL = canvas.toDataURL("image/png");
                resolve(dataURL);
            };
            img.onerror = error => reject(error);
            img.src = url;
        });
    }

    async createPDF() {
        this.buildContent();
        this.content.columns[0].stack[0].image = await this.getBase64ImageFromURL(this.avatarURL);
        let dd: TDocumentDefinitions = {
            info: {
                title: 'Curriculum Vitae',
                author: 'Carlos Benavides',
                subject: 'Curriculum Vitae',
                keywords: 'curriculum,work,software,web,experience',
            },
            content: this.content,
            styles: this.styles,
            defaultStyle: this.defaultStyle
        }
        pdfMake.createPdf(dd).download('CV_carlos_benavides');
    }
}