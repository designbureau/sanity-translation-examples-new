// Import baseLanguage just to show an example with customizing the slug source
// option
import { baseLanguage } from '../languages'

export default {
  title: 'General',
  name: 'general',
  type: 'document',
  // This property says we should have all fields localized,
  // except any field that explicitly says localize: false
  localize: true,
  // We need to define preview if the fields we
  // use as preview of this document in lists etc
  // is a translated field. The fields we name here
  // will be used for previews with the value of the
  // base language.
  preview: {
    // select: {
    //   title: 'title',
    // }
  },
  fields: [
    {
      title: 'Hello',
      name: 'cp_hello',
      type: 'string',
      initialValue: 'Hello'
    },
    {
      title: 'Edit details header',
      name: 'cp_edit_details',
      type: 'string',
      initialValue: 'Edit details'
    },
    {
      title: 'Update button',
      name: 'cp_update_button',
      type: 'string',
      initialValue: 'Update'
    },
    {
      title: 'Next button',
      name: 'cp_proceed_button',
      type: 'string',
      initialValue: 'Next'
    },
    {
      title: 'Select button',
      name: 'cp_select_button',
      type: 'string',
      initialValue: 'Select'
    },
    {
      title: 'Save button',
      name: 'Save',
      type: 'string',
      initialValue: 'Save'
    },
    {
      title: 'Create button',
      name: 'cp_create',
      type: 'string',
      initialValue: 'Create'
    },
    {
      title: 'Yes proceed button',
      name: 'cp_yes_proceed_button',
      type: 'string',
      initialValue: 'Yes, proceed'
    },
    {
      title: 'Cancel button ( Preview modal )',
      name: 'cp_cancel_preview_modal_button',
      type: 'string',
      initialValue: 'Cancel'
    },
    {
      title: 'Ok button ( Modal )',
      name: 'cp_modal_ok_button',
      type: 'string',
      initialValue: 'Ok'
    },
    {
      title: 'I understand button',
      name: 'cp_i_understand_button',
      type: 'string',
      initialValue: 'I understand'
    },
    {
      title: 'Search button',
      name: 'cp_search',
      type: 'string',
      initialValue: 'Search'
    },
    {
      title: 'out of',
      name: 'cp_out_of',
      type: 'string',
      initialValue: 'out of'
    },
    {
      title: 'N/A',
      name: 'cp_not_available',
      type: 'string',
      initialValue: 'N/A'
    },
    {
      title: 'st suffix label',
      name: 'cp_st_suffix',
      type: 'string',
      initialValue: 'st'
    },
    {
      title: 'nd suffix label',
      name: 'cp_nd_suffix',
      type: 'string',
      initialValue: 'nd'
    },
    {
      title: 'rd suffix label',
      name: 'cp_rd_suffix',
      type: 'string',
      initialValue: 'rd'
    },
    {
      title: 'th suffix label',
      name: 'cp_th_suffix',
      type: 'string',
      initialValue: 'th'
    },
    {
      title: 'Updates saved successfully',
      name: 'cp_updates_saved_successfully',
      type: 'string',
      initialValue: 'Updates saved successfully'
    },
    {
      title: '',
      name: '',
      type: 'string',
      initialValue: ''
    },
    {
      title: '',
      name: '',
      type: 'string',
      initialValue: ''
    },
    {
      title: '',
      name: '',
      type: 'string',
      initialValue: ''
    },
    {
      title: '',
      name: '',
      type: 'string',
      initialValue: ''
    },
    {
      title: '',
      name: '',
      type: 'string',
      initialValue: ''
    },
    {
      title: '',
      name: '',
      type: 'string',
      initialValue: ''
    },
    {
      title: '',
      name: '',
      type: 'string',
      initialValue: ''
    },
    {
      title: '',
      name: '',
      type: 'string',
      initialValue: ''
    },
    {
      title: '',
      name: '',
      type: 'string',
      initialValue: ''
    },
    {
      title: '',
      name: '',
      type: 'string',
      initialValue: ''
    },
    {
      title: '',
      name: '',
      type: 'string',
      initialValue: ''
    },
    {
      title: '',
      name: '',
      type: 'string',
      initialValue: ''
    },
    {
      title: '',
      name: '',
      type: 'string',
      initialValue: ''
    },
    
  ]
}
