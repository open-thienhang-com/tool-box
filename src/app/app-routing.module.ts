import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'color-picker',
    loadComponent: () => import('./modules/web-tool/color-picker/color-picker.component').then(mod => mod.ColorPickerComponent)
  },
  {
    path: 'qr-generator',
    loadComponent: () => import('./modules/web-tool/qr-generator/qr-generator.component').then(mod => mod.QrGeneratorComponent)
  },
  {
    path: 'word-counter',
    loadComponent: () => import('./modules/text/word-counter/word-counter.component').then(mod => mod.WordCounterComponent)
  },
  {
    path: 'case-converted',
    loadComponent: () => import('./modules/text/case-converter/case-converter.component').then(mod => mod.CaseConverterComponent)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
