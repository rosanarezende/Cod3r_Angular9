import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit { // podemos usar Onchange, pra atualizar quando mudar

  @Input('myForEm') numbers: number[]
  // @Input('myForUsando') texto: string

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) { }

  ngOnInit(): void {
    // console.log(this.numbers)
    // console.log(this.texto)

    for (let number of this.numbers) { // a ideia é colocar 3 lis na tela do footer
      this.container.createEmbeddedView(this.template, { $implicit: number })
      // os números só apareceram após colocar esse implicit
    }
  }

}
