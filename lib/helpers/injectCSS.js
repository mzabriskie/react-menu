module.exports = function() {
  injectStyle([
    '.Menu {',
      '  background-color: rgba(255, 255, 255, 0.75);',
      '}',
      '.Menu__MenuOption {',
      '  height: 30px;',
      '  padding-top: 10px;',
      '}',
      '.Menu__MenuOption--active {',
      '  background-color: #0aafff;',
      '}',
      '.Menu__Trigger {',
        '  position: absolute;',
        '  top: 40px;',
        '  left: 40px;',
        '  right: 40px;',
        '  bottom: 40px;',
        '  border: 1px solid #ccc;',
        '  background: #fff;',
        '  overflow: auto;',
        '  -webkit-overflow-scrolling: touch;',
        '  border-radius: 4px;',
        '  outline: none;',
        '  padding: 20px;',
        '}',
        '@media (max-width: 768px) {',
          '  .ReactMenu__Content {',
            '    top: 10px;',
            '    left: 10px;',
            '    right: 10px;',
            '    bottom: 10px;',
            '    padding: 10px;',
            '  }',
            '}'
            ].join('\n'));
};

function injectStyle(css) {
  var style = document.getElementById('rackt-style');
  if (!style) {
    style = document.createElement('style');
    style.setAttribute('id', 'rackt-style');
    var head = document.getElementsByTagName('head')[0];
    head.insertBefore(style, head.firstChild);
  }
  style.innerHTML = style.innerHTML+'\n'+css;
}
