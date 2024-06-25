export class AppConst {
  static appMenu = [
    {
      name: 'Web tool',
      icon: 'pi pi-fw pi-file',
      items: [
        {
          name: 'Color picker',
          icon: 'pi pi-fw pi-trash',
          routerLink: 'color-picker'
        },
        {
          name: 'QR Generator',
          icon: 'pi pi-fw pi-trash',
          routerLink: 'qr-generator'
        },
        {
          name: 'Base64',
          icon: 'pi pi-fw pi-trash',
          routerLink: 'base64'
        },
        {
          name: 'JSON Formatter',
          icon: 'pi pi-fw pi-trash',
          routerLink: 'json-formatter'
        },
      ],
      isExpanded: true,
    },
    {
      name: 'Text',
      icon: 'pi pi-fw pi-file',
      items: [
        {
          name: 'Word counter',
          icon: 'pi pi-fw pi-trash',
          routerLink: 'word-counter'
        },
        {
          name: 'Case converted',
          icon: 'pi pi-fw pi-trash',
          routerLink: 'case-converted'
        },
      ],
      isExpanded: true,
    },
  ]
}
