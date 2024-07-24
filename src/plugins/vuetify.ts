/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
// import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// directly import individual sass files to stress test
//   find node_modules/vuetify/lib/components -name '*.sass'
import "vuetify/lib/components/VTable/VTable.sass";
import "vuetify/lib/components/VWindow/VWindow.sass";
import "vuetify/lib/components/VExpansionPanel/VExpansionPanel.sass";
import "vuetify/lib/components/VIcon/VIcon.sass";
import "vuetify/lib/components/VCounter/VCounter.sass";
import "vuetify/lib/components/VDivider/VDivider.sass";
// import "vuetify/lib/components/VTreeview/VTreeview.sass";
import "vuetify/lib/components/VLayout/VLayout.sass";
import "vuetify/lib/components/VLayout/VLayoutItem.sass";
import "vuetify/lib/components/VAvatar/VAvatar.sass";
import "vuetify/lib/components/VParallax/VParallax.sass";
import "vuetify/lib/components/VField/VField.sass";
import "vuetify/lib/components/VFileInput/VFileInput.sass";
import "vuetify/lib/components/VCheckbox/VCheckbox.sass";
import "vuetify/lib/components/VOtpInput/VOtpInput.sass";
import "vuetify/lib/components/VAutocomplete/VAutocomplete.sass";
import "vuetify/lib/components/VImg/VImg.sass";
import "vuetify/lib/components/VRadioGroup/VRadioGroup.sass";
import "vuetify/lib/components/VKbd/VKbd.sass";
import "vuetify/lib/components/VAppBar/VAppBar.sass";
import "vuetify/lib/components/VOverlay/VOverlay.sass";
import "vuetify/lib/components/VSlideGroup/VSlideGroup.sass";
import "vuetify/lib/components/VApp/VApp.sass";
import "vuetify/lib/components/VMessages/VMessages.sass";
import "vuetify/lib/components/VThemeProvider/VThemeProvider.sass";
import "vuetify/lib/components/VSelectionControlGroup/VSelectionControlGroup.sass";
import "vuetify/lib/components/VBtnGroup/VBtnGroup.sass";
import "vuetify/lib/components/VTextField/VTextField.sass";
import "vuetify/lib/components/VInput/VInput.sass";
import "vuetify/lib/components/VBtnToggle/VBtnToggle.sass";
import "vuetify/lib/components/VList/VList.sass";
import "vuetify/lib/components/VList/VListItem.sass";
import "vuetify/lib/components/VCard/VCard.sass";
import "vuetify/lib/components/VPagination/VPagination.sass";
import "vuetify/lib/components/VSwitch/VSwitch.sass";
import "vuetify/lib/components/VLocaleProvider/VLocaleProvider.sass";
import "vuetify/lib/components/VSlider/VSliderTrack.sass";
import "vuetify/lib/components/VSlider/VSliderThumb.sass";
import "vuetify/lib/components/VSlider/VSlider.sass";
import "vuetify/lib/components/VSelect/VSelect.sass";
import "vuetify/lib/components/VSpeedDial/VSpeedDial.sass";
import "vuetify/lib/components/VSheet/VSheet.sass";
import "vuetify/lib/components/VSelectionControl/VSelectionControl.sass";
import "vuetify/lib/components/VItemGroup/VItemGroup.sass";
import "vuetify/lib/components/VSkeletonLoader/VSkeletonLoader.sass";
import "vuetify/lib/components/VGrid/VGrid.sass";
import "vuetify/lib/components/VTimeline/VTimeline.sass";
import "vuetify/lib/components/VMain/VMain.sass";
import "vuetify/lib/components/VToolbar/VToolbar.sass";
import "vuetify/lib/components/VInfiniteScroll/VInfiniteScroll.sass";
import "vuetify/lib/components/VFab/VFab.sass";
import "vuetify/lib/components/VProgressCircular/VProgressCircular.sass";
import "vuetify/lib/components/VCombobox/VCombobox.sass";
import "vuetify/lib/components/VBadge/VBadge.sass";
import "vuetify/lib/components/VRating/VRating.sass";
import "vuetify/lib/components/VStepper/VStepperItem.sass";
import "vuetify/lib/components/VStepper/VStepper.sass";
import "vuetify/lib/components/VFooter/VFooter.sass";
import "vuetify/lib/components/VSystemBar/VSystemBar.sass";
import "vuetify/lib/components/VEmptyState/VEmptyState.sass";
import "vuetify/lib/components/VBottomNavigation/VBottomNavigation.sass";
import "vuetify/lib/components/VChipGroup/VChipGroup.sass";
// import "vuetify/lib/components/VOverflowBtn/VOverflowBtn.sass";
import "vuetify/lib/components/VSnackbar/VSnackbar.sass";
import "vuetify/lib/components/VBanner/VBanner.sass";
import "vuetify/lib/components/VDatePicker/VDatePickerYears.sass";
import "vuetify/lib/components/VDatePicker/VDatePicker.sass";
import "vuetify/lib/components/VDatePicker/VDatePickerMonth.sass";
import "vuetify/lib/components/VDatePicker/VDatePickerMonths.sass";
import "vuetify/lib/components/VDatePicker/VDatePickerHeader.sass";
import "vuetify/lib/components/VDatePicker/VDatePickerControls.sass";
import "vuetify/lib/components/VBtn/VBtn.sass";
import "vuetify/lib/components/VTextarea/VTextarea.sass";
import "vuetify/lib/components/VLabel/VLabel.sass";
import "vuetify/lib/components/VDialog/VDialog.sass";
import "vuetify/lib/components/VTooltip/VTooltip.sass";
import "vuetify/lib/components/VVirtualScroll/VVirtualScroll.sass";
import "vuetify/lib/components/VDataTable/VDataTableFooter.sass";
import "vuetify/lib/components/VDataTable/VDataTable.sass";
import "vuetify/lib/components/VBottomSheet/VBottomSheet.sass";
import "vuetify/lib/components/VAlert/VAlert.sass";
import "vuetify/lib/components/VProgressLinear/VProgressLinear.sass";
import "vuetify/lib/components/VTabs/VTabs.sass";
import "vuetify/lib/components/VTabs/VTab.sass";
import "vuetify/lib/components/VColorPicker/VColorPickerCanvas.sass";
import "vuetify/lib/components/VColorPicker/VColorPicker.sass";
import "vuetify/lib/components/VColorPicker/VColorPickerSwatches.sass";
import "vuetify/lib/components/VColorPicker/VColorPickerEdit.sass";
import "vuetify/lib/components/VColorPicker/VColorPickerPreview.sass";
import "vuetify/lib/components/VBreadcrumbs/VBreadcrumbs.sass";
import "vuetify/lib/components/VResponsive/VResponsive.sass";
import "vuetify/lib/components/VChip/VChip.sass";
import "vuetify/lib/components/VNavigationDrawer/VNavigationDrawer.sass";
import "vuetify/lib/components/VCode/VCode.sass";
import "vuetify/lib/components/VMenu/VMenu.sass";
import "vuetify/lib/components/VCarousel/VCarousel.sass";

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark',
  },
})
