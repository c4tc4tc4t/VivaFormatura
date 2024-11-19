import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  fotos: { caminho: string, descricao: string }[] = [];
  colecao: string = '';

  // Definição de opções responsivas para o carousel
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 1,  // Mostra 1 imagem em telas grandes
      numScroll: 1    // Avança 1 imagem por vez
    },
    {
      breakpoint: '768px',
      numVisible: 1,  // Mostra 1 imagem em telas médias
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 1,  // Mostra 1 imagem em telas pequenas
      numScroll: 1
    }
  ];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // Captura o parâmetro da rota que contém a coleção
    this.colecao = this.route.snapshot.paramMap.get('collection') || '';
    this.carregarFotos();
  }

  carregarFotos() {
    if (this.colecao === 'Baile') {
      this.fotos = [
        { caminho: 'assets/fotos/Baile/1  DSC08399.jpg', descricao: 'Foto 1' },
        { caminho: 'assets/fotos/Baile/1 _MG_1681.jpg', descricao: 'Foto 2' },
        { caminho: 'assets/fotos/Baile/1 17122022-IMG_0939.JPG', descricao: 'Foto 3' },
        { caminho: 'assets/fotos/Baile/1 27052023-IMG_0802.JPG', descricao: 'Foto 4' },
        { caminho: 'assets/fotos/Baile/1 DSC06093.jpg', descricao: 'Foto 5' },
        { caminho: 'assets/fotos/Baile/1 E1501483438 (29).JPG', descricao: 'Foto 6' },
        { caminho: 'assets/fotos/Baile/1_DSC3441.jpg', descricao: 'Foto 7' },
        { caminho: 'assets/fotos/Baile/1_Odonto 2021-2 (231).jpg', descricao: 'Foto 8' },
        { caminho: 'assets/fotos/Baile/2 DSC06068.jpg', descricao: 'Foto 9' },
        { caminho: 'assets/fotos/Baile/2_Odonto 2021-2 (203).jpg', descricao: 'Foto 10' },
        { caminho: 'assets/fotos/Baile/3 Baile-93.jpg', descricao: 'Foto 11' },
        { caminho: 'assets/fotos/Baile/4 DSC06072.jpg', descricao: 'Foto 12' },
        { caminho: 'assets/fotos/Baile/5 DSC06120.jpg', descricao: 'Foto 13' },
        { caminho: 'assets/fotos/Baile/6 DSC06103.jpg', descricao: 'Foto 14' },
        { caminho: 'assets/fotos/Baile/465454.jpg', descricao: 'Foto 15' },
        { caminho: 'assets/fotos/Baile/48366016_2329517987068102_608810978552840192_n.jpg', descricao: 'Foto 16' },
        { caminho: 'assets/fotos/Baile/DSC00123-01.jpeg', descricao: 'Foto 17' },
        { caminho: 'assets/fotos/Baile/DSC00129-01.jpeg', descricao: 'Foto 18' },
        { caminho: 'assets/fotos/Baile/DSC00131-01.jpeg', descricao: 'Foto 19' },
        { caminho: 'assets/fotos/Baile/DSC06068.jpg', descricao: 'Foto 20' },
        { caminho: 'assets/fotos/Baile/DSC06082.jpg', descricao: 'Foto 21' },
        { caminho: 'assets/fotos/Baile/DSC06128.jpg', descricao: 'Foto 22' },
        { caminho: 'assets/fotos/Baile/DSC06155.jpg', descricao: 'Foto 23' },
        { caminho: 'assets/fotos/Baile/DSC08391.jpg', descricao: 'Foto 24' },
        { caminho: 'assets/fotos/Baile/DSC08398.jpg', descricao: 'Foto 25' },
        { caminho: 'assets/fotos/Baile/Formatura Viva MED 68 (81 de 171).jpg', descricao: 'Foto 26' },
        { caminho: 'assets/fotos/Baile/Formatura Viva MED 68 (92 de 171).jpg', descricao: 'Foto 27' },
        { caminho: 'assets/fotos/Baile/IMG_4863.jpg', descricao: 'Foto 28' },
        { caminho: 'assets/fotos/Baile/IMG_4874.jpg', descricao: 'Foto 29' },
        { caminho: 'assets/fotos/Baile/IMG_4892.jpg', descricao: 'Foto 30' },
        { caminho: 'assets/fotos/Baile/IMG_4905.jpg', descricao: 'Foto 31' },
        { caminho: 'assets/fotos/Baile/IMG_4934.jpg', descricao: 'Foto 32' },
        { caminho: 'assets/fotos/Baile/IMG_5437.JPG', descricao: 'Foto 33' },
        { caminho: 'assets/fotos/Baile/IMG_5457.JPG', descricao: 'Foto 34' },
        { caminho: 'assets/fotos/Baile/WhatsApp Image 2022-08-12 at 17.52.36.jpeg', descricao: 'Foto 35' },
      ];
    } else if (this.colecao === 'Direito') {
      this.fotos = [
        { caminho: 'assets/fotos/Direito/1 DSC_8828.jpg', descricao: 'Foto 1' },
        { caminho: 'assets/fotos/Direito/1_DSC8016.jpg', descricao: 'Foto 2' },
        { caminho: 'assets/fotos/Direito/1_DSC8770.JPG', descricao: 'Foto 3' },
        { caminho: 'assets/fotos/Direito/2 DSC_9213.jpg', descricao: 'Foto 4' },
        { caminho: 'assets/fotos/Direito/3 _DSC8903.JPG', descricao: 'Foto 5' },
        { caminho: 'assets/fotos/Direito/SHAKJHS76.JPG', descricao: 'Foto 6' },
        { caminho: 'assets/fotos/Direito/Z61_5812.JPG', descricao: 'Foto 7' },
        { caminho: 'assets/fotos/Direito/Z61_5897.JPG', descricao: 'Foto 8' },
        { caminho: 'assets/fotos/Direito/Z61_6109.JPG', descricao: 'Foto 9' },
        { caminho: 'assets/fotos/Direito/Z61_6112.JPG', descricao: 'Foto 10' },
        { caminho: 'assets/fotos/Direito/Z61_6206.JPG', descricao: 'Foto 11' }
      ];
    } else if (this.colecao === 'Medicina') {
      this.fotos = [
        { caminho: 'assets/fotos/Medicina/0JBO5638.JPG', descricao: 'Foto 1' },
        { caminho: 'assets/fotos/Medicina/0JBO5846.JPG', descricao: 'Foto 2' },
        { caminho: 'assets/fotos/Medicina/1 IMG_1130.JPG', descricao: 'Foto 3' },
        { caminho: 'assets/fotos/Medicina/2 @Viva_Eventos_-201.jpg', descricao: 'Foto 4' },
        { caminho: 'assets/fotos/Medicina/2 Meio Médico UCS 26-2-606.jpg', descricao: 'Foto 5' },
        { caminho: 'assets/fotos/Medicina/9 @Viva_Eventos_-218.jpg', descricao: 'Foto 6' },
        { caminho: 'assets/fotos/Medicina/ALE_3339.jpg', descricao: 'Foto 7' },
        { caminho: 'assets/fotos/Medicina/ALE_3638.jpg', descricao: 'Foto 8' },
        { caminho: 'assets/fotos/Medicina/ALE_3816.jpg', descricao: 'Foto 9' },
        { caminho: 'assets/fotos/Medicina/ARV01495.jpg', descricao: 'Foto 10' },
        { caminho: 'assets/fotos/Medicina/ARV02096.jpg', descricao: 'Foto 11' },
        { caminho: 'assets/fotos/Medicina/ARV02553.jpg', descricao: 'Foto 12' },
        { caminho: 'assets/fotos/Medicina/IMG_1979Resultado.jpg', descricao: 'Foto 13' },
        { caminho: 'assets/fotos/Medicina/JANTAR MED TERE 87 (1).jpg', descricao: 'Foto 14' },
        { caminho: 'assets/fotos/Medicina/LUC00164.jpg', descricao: 'Foto 15' }
      ];
    } else if (this.colecao === 'Odonto') {
      this.fotos = [
        { caminho: 'assets/fotos/Odonto/_ CAPA_DSC0856.JPG', descricao: 'Foto 1' },
        { caminho: 'assets/fotos/Odonto/_2.JPG', descricao: 'Foto 2' },
        { caminho: 'assets/fotos/Odonto/_DSC0699.JPG', descricao: 'Foto 3' },
        { caminho: 'assets/fotos/Odonto/_DSC1629.JPG', descricao: 'Foto 4' },
        { caminho: 'assets/fotos/Odonto/_DSC2233.jpg', descricao: 'Foto 5' },
        { caminho: 'assets/fotos/Odonto/_DSC2381.JPG', descricao: 'Foto 6' },
        { caminho: 'assets/fotos/Odonto/_DSC2638.JPG', descricao: 'Foto 7' },
        { caminho: 'assets/fotos/Odonto/1 Foto 02-03-2024, 17 46 38.jpg', descricao: 'Foto 8' },
        { caminho: 'assets/fotos/Odonto/2 MeioOdontoQU4RTO-Festa-221.jpg', descricao: 'Foto 9' },
        { caminho: 'assets/fotos/Odonto/Foto 13-04-2024, 16 44 43.jpg', descricao: 'Foto 10' }
      ];
    }
  }

  goBack() {
    this.router.navigate(['/cards']);
  }
}
