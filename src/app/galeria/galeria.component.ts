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
    if (this.colecao === 'colecao-um') {
      this.fotos = [
        { caminho: 'assets/fotos/colecao-um/heber-davis-OWz1mcjdoKQ-unsplash.jpg', descricao: 'Foto 1' },
        { caminho: 'assets/fotos/colecao-um/logan-weaver-lgnwvr-QGTBdiroZ68-unsplash.jpg', descricao: 'Foto 2' },
        { caminho: 'assets/fotos/colecao-um/michiel-annaert-X_KuLiqyStU-unsplash.jpg', descricao: 'Foto 3' },
        { caminho: 'assets/fotos/colecao-um/slava-auchynnikau-YtpXIVQ3o0w-unsplash.jpg', descricao: 'Foto 4' }
      ];
    } else if (this.colecao === 'colecao-dois') {
      this.fotos = [
        { caminho: 'assets/fotos/colecao-dois/maksim-samuilionak-O8hC2HNjL50-unsplash.jpg', descricao: 'Foto 1' },
        { caminho: 'assets/fotos/colecao-dois/mo-mOm57qXsLXY-unsplash.jpg', descricao: 'Foto 2' },
        { caminho: 'assets/fotos/colecao-dois/nick-design-T2KdAMJDf6o-unsplash.jpg', descricao: 'Foto 3' },
        { caminho: 'assets/fotos/colecao-dois/rocky-xiong-wyY4Jj2_CEo-unsplash.jpg', descricao: 'Foto 4' }
      ];
    } else if (this.colecao === 'colecao-tres') {
      this.fotos = [
        { caminho: 'assets/fotos/colecao-tres/sheng-hu-0H18vkgrs2Q-unsplash.jpg', descricao: 'Foto 1' },
        { caminho: 'assets/fotos/colecao-tres/tilak-baloni-g-UErVX8jb0-unsplash.jpg', descricao: 'Foto 2' }
      ];
    } else if (this.colecao === 'colecao-quatro') {
      this.fotos = [
        { caminho: 'assets/fotos/colecao-quatro/dylann-hendricks-nigAIQga1-Q-unsplash.jpg', descricao: 'Foto 1' },
        { caminho: 'assets/fotos/colecao-quatro/steve-johnson-N1XFrOVBV9o-unsplash.jpg', descricao: 'Foto 2' },
        { caminho: 'assets/fotos/colecao-quatro/willian-justen-de-vasconcellos-gNZz9w4UnmQ-unsplash.jpg', descricao: 'Foto 3' }
      ];
    }
  }

  goBack() {
    this.router.navigate(['/cards']);
  }
}
