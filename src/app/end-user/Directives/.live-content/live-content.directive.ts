import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[printekLiveContent]'
})
export class LiveContentDirective implements OnInit {

  parent;
  editor;
  textArea;
  _targetElem;

  constructor(private rootElem: ElementRef) { }

  ngOnInit() {
    this.initializeEditor();
    this.rootElem.nativeElement
      .addEventListener('click', args => this.targetElem = args.target);
  }


  set targetElem(elem) {
    this._targetElem = elem;
    this.showEditor();
  }

  showEditor() {
    this.placedTextArea.innerText = '';
    this.placedTextArea.innerText = this._targetElem.innerText;
    this.placedEditor.style.display = 'flex';
  }

  get placedEditor() {
    return document.querySelector('.acar-ui-editor') as HTMLDivElement
  }

  get placedTextArea() {
    return this.placedEditor.querySelector('textarea')
  }

  initializeEditor() {
    this.createElements();
    this.styleEditor();

    document.body.appendChild(this.parent);
  }

  createElements() {
    this.parent = document.createElement('div');
    this.parent.classList.add('acar-ui-editor');

    this.editor = document.createElement('div');
    this.editor.classList.add('printek-box');

    this.textArea = document.createElement('textarea');
    this.textArea.addEventListener('input', args => {
      this._targetElem.innerText = args.target.value
    })

    this.editor.appendChild(this.textArea);
    this.parent.appendChild(this.editor);
  }

  styleEditor() {
    const styles = {
      parent: {
        display: 'none',
        position: 'fixed',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: '100%',
        height: 0,
        margin: '32px 0',
        backgroundColor: 'rgba(255, 255, 255, 0.7)'
      },

      editor: {
        width: '220px',
      },

      textArea: {
        background: 'none',
        fontFamily: 'roboto',
        minHeight: '128px',
        outline: 0,
        border: 'none',
        fontSize: '14px'
      }
    };

    for(const elem in styles)
      for(const prop in styles[elem])
        this[elem].style[prop] = styles[elem][prop]
  }
}
