import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';


import {CommonPipesModule} from '../pipes/commonPipes.module';
import {LocaleModule} from './locale/locale.module';

import {
  AlertComponent,
  AssetAllocationComponent,
  AssetAllocationLegendComponent,
  ButtonControlComponent,
  CardComponent,
  CardCallToActionComponent,
  CardSectionComponent,
  CardSectionEqualizerDirective,
  CardSectionHeaderComponent,
  CarouselComponent,
  CheckBoxComponent,
  ContentLayoutComponent,
  ErrorMessageComponent,
  FooterNavigationButtonComponent,
  GenericLoadingContainer,
  HamburgerButtonComponent,
  HeadingComponent,
  InstructionsComponent,
  LoadingContainerComponent,
  LogoComponent,
  PasswordVisibilityButtonComponent,
  PasswordPolicyErrorMessageComponent,
  PasswordPolicySuccessComponent,
  SelectionButtonComponent,
  SideNavigationComponent,
  SideNavigationItemComponent,
  SideNavigationItemContainerComponent,
  SignUpComponent,
  SignUpFieldComponent,
  TextButtonComponent,
  UniverisFooter,
  UserBadgeComponent,
  UserInfoComponent
} from './index';
import {RouterModule} from '@angular/router';

const components = [
  AlertComponent,
  AssetAllocationComponent,
  AssetAllocationLegendComponent,
  ButtonControlComponent,
  CardComponent,
  CardCallToActionComponent,
  CardSectionComponent,
  CardSectionEqualizerDirective,
  CardSectionHeaderComponent,
  CarouselComponent,
  CheckBoxComponent,
  ContentLayoutComponent,
  ErrorMessageComponent,
  FooterNavigationButtonComponent,
  GenericLoadingContainer,
  HamburgerButtonComponent,
  HeadingComponent,
  InstructionsComponent,
  LoadingContainerComponent,
  LogoComponent,
  PasswordVisibilityButtonComponent,
  PasswordPolicyErrorMessageComponent,
  PasswordPolicySuccessComponent,
  SelectionButtonComponent,
  SideNavigationComponent,
  SideNavigationItemComponent,
  SideNavigationItemContainerComponent,
  SignUpComponent,
  SignUpFieldComponent,
  TextButtonComponent,
  UniverisFooter,
  UserBadgeComponent,
  UserInfoComponent
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    CommonPipesModule,
    LocaleModule
  ],
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ]
})
export class CommonComponentsModule { }
