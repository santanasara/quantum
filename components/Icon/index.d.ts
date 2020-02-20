import React from 'react';

export type IconNames =
    | 'access_alarm'
    | 'access_alarms'
    | 'accessibility'
    | 'accessible'
    | 'access_time'
    | 'account_balance'
    | 'account_balance_wallet'
    | 'account_box'
    | 'account_circle'
    | 'ac_unit'
    | 'adb'
    | 'add_alarm'
    | 'add_alert'
    | 'add_a_photo'
    | 'add_box'
    | 'add_circle'
    | 'add_circle_outline'
    | 'add'
    | 'add_location'
    | 'add_shopping_cart'
    | 'add_to_photos'
    | 'add_to_queue'
    | 'adjust'
    | 'airline_seat_flat_angled'
    | 'airline_seat_flat'
    | 'airline_seat_individual_suite'
    | 'airline_seat_legroom_extra'
    | 'airline_seat_legroom_normal'
    | 'airline_seat_legroom_reduced'
    | 'airline_seat_recline_extra'
    | 'airline_seat_recline_normal'
    | 'airplanemode_active'
    | 'airplanemode_inactive'
    | 'airplay'
    | 'airport_shuttle'
    | 'alarm_add'
    | 'alarm'
    | 'alarm_off'
    | 'alarm_on'
    | 'album'
    | 'all_inclusive'
    | 'all_out'
    | 'android'
    | 'announcement'
    | 'apps'
    | 'archive'
    | 'arrow_back'
    | 'arrow_downward'
    | 'arrow_drop_down_circle'
    | 'arrow_drop_down'
    | 'arrow_drop_up'
    | 'arrow_forward'
    | 'arrow_upward'
    | 'art_track'
    | 'aspect_ratio'
    | 'assessment'
    | 'assignment_ind'
    | 'assignment'
    | 'assignment_late'
    | 'assignment_returned'
    | 'assignment_return'
    | 'assignment_turned_in'
    | 'assistant'
    | 'assistant_photo'
    | 'attach_file'
    | 'attachment'
    | 'attach_money'
    | 'audiotrack'
    | 'autorenew'
    | 'av_timer'
    | 'backspace'
    | 'backup'
    | 'battery_alert'
    | 'battery_charging_full'
    | 'battery_full'
    | 'battery_std'
    | 'battery_unknown'
    | 'beach_access'
    | 'beenhere'
    | 'block'
    | 'bluetooth_audio'
    | 'bluetooth_connected'
    | 'bluetooth_disabled'
    | 'bluetooth'
    | 'bluetooth_searching'
    | 'blur_circular'
    | 'blur_linear'
    | 'blur_off'
    | 'blur_on'
    | 'book'
    | 'bookmark_border'
    | 'bookmark'
    | 'border_all'
    | 'border_bottom'
    | 'border_clear'
    | 'border_color'
    | 'border_horizontal'
    | 'border_inner'
    | 'border_left'
    | 'border_outer'
    | 'border_right'
    | 'border_style'
    | 'border_top'
    | 'border_vertical'
    | 'branding_watermark'
    | 'brightness_1'
    | 'brightness_2'
    | 'brightness_3'
    | 'brightness_4'
    | 'brightness_5'
    | 'brightness_6'
    | 'brightness_7'
    | 'brightness_auto'
    | 'brightness_high'
    | 'brightness_low'
    | 'brightness_medium'
    | 'broken_image'
    | 'brush'
    | 'bubble_chart'
    | 'bug_report'
    | 'build'
    | 'burst_mode'
    | 'business_center'
    | 'business'
    | 'cached'
    | 'cake'
    | 'call_end'
    | 'call'
    | 'call_made'
    | 'call_merge'
    | 'call_missed'
    | 'call_missed_outgoing'
    | 'call_received'
    | 'call_split'
    | 'call_to_action'
    | 'camera_alt'
    | 'camera_enhance'
    | 'camera_front'
    | 'camera'
    | 'camera_rear'
    | 'camera_roll'
    | 'cancel'
    | 'card_giftcard'
    | 'card_membership'
    | 'card_travel'
    | 'casino'
    | 'cast_connected'
    | 'cast'
    | 'center_focus_strong'
    | 'center_focus_weak'
    | 'change_history'
    | 'chat_bubble'
    | 'chat_bubble_outline'
    | 'chat'
    | 'check_box'
    | 'check_box_outline_blank'
    | 'check_circle'
    | 'check'
    | 'chevron_left'
    | 'chevron_right'
    | 'child_care'
    | 'child_friendly'
    | 'chrome_reader_mode'
    | 'class'
    | 'clear_all'
    | 'clear'
    | 'closed_caption'
    | 'close'
    | 'cloud_circle'
    | 'cloud_done'
    | 'cloud_download'
    | 'cloud'
    | 'cloud_off'
    | 'cloud_queue'
    | 'cloud_upload'
    | 'code'
    | 'collections_bookmark'
    | 'collections'
    | 'colorize'
    | 'color_lens'
    | 'comment'
    | 'compare_arrows'
    | 'compare'
    | 'computer'
    | 'confirmation_number'
    | 'contact_mail'
    | 'contact_phone'
    | 'contacts'
    | 'content_copy'
    | 'content_cut'
    | 'content_paste'
    | 'control_point_duplicate'
    | 'control_point'
    | 'copyright'
    | 'create'
    | 'create_new_folder'
    | 'credit_card'
    | 'crop_16_9'
    | 'crop_3_2'
    | 'crop_5_4'
    | 'crop_7_5'
    | 'crop_din'
    | 'crop_free'
    | 'crop'
    | 'crop_landscape'
    | 'crop_original'
    | 'crop_portrait'
    | 'crop_rotate'
    | 'crop_square'
    | 'dashboard'
    | 'data_usage'
    | 'date_range'
    | 'dehaze'
    | 'delete_forever'
    | 'delete'
    | 'delete_sweep'
    | 'description'
    | 'desktop_mac'
    | 'desktop_windows'
    | 'details'
    | 'developer_board'
    | 'developer_mode'
    | 'device_hub'
    | 'devices'
    | 'devices_other'
    | 'dialer_sip'
    | 'dialpad'
    | 'directions_bike'
    | 'directions_boat'
    | 'directions_bus'
    | 'directions_car'
    | 'directions'
    | 'directions_railway'
    | 'directions_run'
    | 'directions_subway'
    | 'directions_transit'
    | 'directions_walk'
    | 'disc_full'
    | 'dns'
    | 'dock'
    | 'domain'
    | 'done_all'
    | 'done'
    | 'do_not_disturb_alt'
    | 'do_not_disturb'
    | 'do_not_disturb_off'
    | 'do_not_disturb_on'
    | 'donut_large'
    | 'donut_small'
    | 'drafts'
    | 'drag_handle'
    | 'drive_eta'
    | 'dvr'
    | 'edit'
    | 'edit_location'
    | 'eject'
    | 'email'
    | 'enhanced_encryption'
    | 'equalizer'
    | 'error'
    | 'error_outline'
    | 'euro_symbol'
    | 'event_available'
    | 'event_busy'
    | 'event'
    | 'event_note'
    | 'event_seat'
    | 'ev_station'
    | 'exit_to_app'
    | 'expand_less'
    | 'expand_more'
    | 'explicit'
    | 'explore'
    | 'exposure'
    | 'exposure_neg_1'
    | 'exposure_neg_2'
    | 'exposure_plus_1'
    | 'exposure_plus_2'
    | 'exposure_zero'
    | 'extension'
    | 'face'
    | 'fast_forward'
    | 'fast_rewind'
    | 'favorite_border'
    | 'favorite'
    | 'featured_play_list'
    | 'featured_video'
    | 'feedback'
    | 'fiber_dvr'
    | 'fiber_manual_record'
    | 'fiber_new'
    | 'fiber_pin'
    | 'fiber_smart_record'
    | 'file_download'
    | 'file_upload'
    | 'filter_1'
    | 'filter_2'
    | 'filter_3'
    | 'filter_4'
    | 'filter_5'
    | 'filter_6'
    | 'filter_7'
    | 'filter_8'
    | 'filter_9'
    | 'filter_9_plus'
    | 'filter_b_and_w'
    | 'filter_center_focus'
    | 'filter_drama'
    | 'filter_frames'
    | 'filter_hdr'
    | 'filter'
    | 'filter_list'
    | 'filter_none'
    | 'filter_tilt_shift'
    | 'filter_vintage'
    | 'find_in_page'
    | 'find_replace'
    | 'fingerprint'
    | 'first_page'
    | 'fitness_center'
    | 'flag'
    | 'flare'
    | 'flash_auto'
    | 'flash_off'
    | 'flash_on'
    | 'flight'
    | 'flight_land'
    | 'flight_takeoff'
    | 'flip'
    | 'flip_to_back'
    | 'flip_to_front'
    | 'folder'
    | 'folder_open'
    | 'folder_shared'
    | 'folder_special'
    | 'font_download'
    | 'format_align_center'
    | 'format_align_justify'
    | 'format_align_left'
    | 'format_align_right'
    | 'format_bold'
    | 'format_clear'
    | 'format_color_fill'
    | 'format_color_reset'
    | 'format_color_text'
    | 'format_indent_decrease'
    | 'format_indent_increase'
    | 'format_italic'
    | 'format_line_spacing'
    | 'format_list_bulleted'
    | 'format_list_numbered'
    | 'format_paint'
    | 'format_quote'
    | 'format_shapes'
    | 'format_size'
    | 'format_strikethrough'
    | 'format_textdirection_l_to_r'
    | 'format_textdirection_r_to_l'
    | 'format_underlined'
    | 'forum'
    | 'forward_10'
    | 'forward_30'
    | 'forward_5'
    | 'forward'
    | 'free_breakfast'
    | 'fullscreen_exit'
    | 'fullscreen'
    | 'functions'
    | 'gamepad'
    | 'games'
    | 'gavel'
    | 'gesture'
    | 'get_app'
    | 'gif'
    | 'golf_course'
    | 'gps_fixed'
    | 'gps_not_fixed'
    | 'gps_off'
    | 'grade'
    | 'gradient'
    | 'grain'
    | 'graphic_eq'
    | 'grid_off'
    | 'grid_on'
    | 'group_add'
    | 'group'
    | 'group_work'
    | 'g_translate'
    | 'hd'
    | 'hdr_off'
    | 'hdr_on'
    | 'hdr_strong'
    | 'hdr_weak'
    | 'headset'
    | 'headset_mic'
    | 'healing'
    | 'hearing'
    | 'help'
    | 'help_outline'
    | 'highlight'
    | 'highlight_off'
    | 'high_quality'
    | 'history'
    | 'home'
    | 'hotel'
    | 'hot_tub'
    | 'hourglass_empty'
    | 'hourglass_full'
    | 'http'
    | 'https'
    | 'image_aspect_ratio'
    | 'image'
    | 'important_devices'
    | 'import_contacts'
    | 'import_export'
    | 'inbox'
    | 'indeterminate_check_box'
    | 'info'
    | 'info_outline'
    | 'input'
    | 'insert_chart'
    | 'insert_comment'
    | 'insert_drive_file'
    | 'insert_emoticon'
    | 'insert_invitation'
    | 'insert_link'
    | 'insert_photo'
    | 'invert_colors'
    | 'invert_colors_off'
    | 'iso'
    | 'keyboard_arrow_down'
    | 'keyboard_arrow_left'
    | 'keyboard_arrow_right'
    | 'keyboard_arrow_up'
    | 'keyboard_backspace'
    | 'keyboard_capslock'
    | 'keyboard_hide'
    | 'keyboard'
    | 'keyboard_return'
    | 'keyboard_tab'
    | 'keyboard_voice'
    | 'kitchen'
    | 'label'
    | 'label_outline'
    | 'landscape'
    | 'language'
    | 'laptop_chromebook'
    | 'laptop'
    | 'laptop_mac'
    | 'laptop_windows'
    | 'last_page'
    | 'launch'
    | 'layers_clear'
    | 'layers'
    | 'leak_add'
    | 'leak_remove'
    | 'lens'
    | 'library_add'
    | 'library_books'
    | 'library_music'
    | 'lightbulb_outline'
    | 'linear_scale'
    | 'line_style'
    | 'line_weight'
    | 'linked_camera'
    | 'link'
    | 'list'
    | 'live_help'
    | 'live_tv'
    | 'local_activity'
    | 'local_airport'
    | 'local_atm'
    | 'local_bar'
    | 'local_cafe'
    | 'local_car_wash'
    | 'local_convenience_store'
    | 'local_dining'
    | 'local_drink'
    | 'local_florist'
    | 'local_gas_station'
    | 'local_grocery_store'
    | 'local_hospital'
    | 'local_hotel'
    | 'local_laundry_service'
    | 'local_library'
    | 'local_mall'
    | 'local_movies'
    | 'local_offer'
    | 'local_parking'
    | 'local_pharmacy'
    | 'local_phone'
    | 'local_pizza'
    | 'local_play'
    | 'local_post_office'
    | 'local_printshop'
    | 'local_see'
    | 'local_shipping'
    | 'local_taxi'
    | 'location_city'
    | 'location_disabled'
    | 'location_off'
    | 'location_on'
    | 'location_searching'
    | 'lock'
    | 'lock_open'
    | 'lock_outline'
    | 'looks_3'
    | 'looks_4'
    | 'looks_5'
    | 'looks_6'
    | 'looks'
    | 'looks_one'
    | 'looks_two'
    | 'loop'
    | 'loupe'
    | 'low_priority'
    | 'loyalty'
    | 'mail'
    | 'mail_outline'
    | 'map'
    | 'markunread'
    | 'markunread_mailbox'
    | 'memory'
    | 'menu'
    | 'merge_type'
    | 'message'
    | 'mic'
    | 'mic_none'
    | 'mic_off'
    | 'mms'
    | 'mode_comment'
    | 'mode_edit'
    | 'monetization_on'
    | 'money_off'
    | 'monochrome_photos'
    | 'mood_bad'
    | 'mood'
    | 'more_horiz'
    | 'more'
    | 'more_vert'
    | 'motorcycle'
    | 'mouse'
    | 'move_to_inbox'
    | 'movie_creation'
    | 'movie_filter'
    | 'movie'
    | 'multiline_chart'
    | 'music_note'
    | 'music_video'
    | 'my_location'
    | 'nature'
    | 'nature_people'
    | 'navigate_before'
    | 'navigate_next'
    | 'navigation'
    | 'near_me'
    | 'network_cell'
    | 'network_check'
    | 'network_locked'
    | 'network_wifi'
    | 'new_releases'
    | 'next_week'
    | 'nfc'
    | 'no_encryption'
    | 'no_sim'
    | 'note_add'
    | 'note'
    | 'notifications_active'
    | 'notifications'
    | 'notifications_none'
    | 'notifications_off'
    | 'notifications_paused'
    | 'not_interested'
    | 'offline_pin'
    | 'ondemand_video'
    | 'opacity'
    | 'open_in_browser'
    | 'open_in_new'
    | 'open_with'
    | 'pages'
    | 'pageview'
    | 'palette'
    | 'panorama_fish_eye'
    | 'panorama_horizontal'
    | 'panorama'
    | 'panorama_vertical'
    | 'panorama_wide_angle'
    | 'pan_tool'
    | 'party_mode'
    | 'pause_circle_filled'
    | 'pause_circle_outline'
    | 'pause'
    | 'payment'
    | 'people'
    | 'people_outline'
    | 'perm_camera_mic'
    | 'perm_contact_calendar'
    | 'perm_data_setting'
    | 'perm_device_information'
    | 'perm_identity'
    | 'perm_media'
    | 'perm_phone_msg'
    | 'perm_scan_wifi'
    | 'person_add'
    | 'personal_video'
    | 'person'
    | 'person_outline'
    | 'person_pin_circle'
    | 'person_pin'
    | 'pets'
    | 'phone_android'
    | 'phone_bluetooth_speaker'
    | 'phone_forwarded'
    | 'phone_in_talk'
    | 'phone_iphone'
    | 'phone'
    | 'phonelink_erase'
    | 'phonelink'
    | 'phonelink_lock'
    | 'phonelink_off'
    | 'phonelink_ring'
    | 'phonelink_setup'
    | 'phone_locked'
    | 'phone_missed'
    | 'phone_paused'
    | 'photo_album'
    | 'photo_camera'
    | 'photo_filter'
    | 'photo'
    | 'photo_library'
    | 'photo_size_select_actual'
    | 'photo_size_select_large'
    | 'photo_size_select_small'
    | 'picture_as_pdf'
    | 'picture_in_picture_alt'
    | 'picture_in_picture'
    | 'pie_chart'
    | 'pie_chart_outlined'
    | 'pin_drop'
    | 'place'
    | 'play_arrow'
    | 'play_circle_filled'
    | 'play_circle_outline'
    | 'play_for_work'
    | 'playlist_add_check'
    | 'playlist_add'
    | 'playlist_play'
    | 'plus_one'
    | 'poll'
    | 'polymer'
    | 'pool'
    | 'portable_wifi_off'
    | 'portrait'
    | 'power_input'
    | 'power'
    | 'power_settings_new'
    | 'pregnant_woman'
    | 'present_to_all'
    | 'print'
    | 'priority_high'
    | 'public'
    | 'publish'
    | 'query_builder'
    | 'question_answer'
    | 'queue'
    | 'queue_music'
    | 'queue_play_next'
    | 'radio_button_checked'
    | 'radio_button_unchecked'
    | 'radio'
    | 'rate_review'
    | 'receipt'
    | 'recent_actors'
    | 'record_voice_over'
    | 'redeem'
    | 'redo'
    | 'refresh'
    | 'remove_circle'
    | 'remove_circle_outline'
    | 'remove_from_queue'
    | 'remove'
    | 'remove_red_eye'
    | 'remove_shopping_cart'
    | 'reorder'
    | 'repeat'
    | 'repeat_one'
    | 'replay_10'
    | 'replay_30'
    | 'replay_5'
    | 'replay'
    | 'reply_all'
    | 'reply'
    | 'report'
    | 'report_problem'
    | 'restaurant'
    | 'restaurant_menu'
    | 'restore'
    | 'restore_page'
    | 'ring_volume'
    | 'room'
    | 'room_service'
    | 'rotate_90_degrees_ccw'
    | 'rotate_left'
    | 'rotate_right'
    | 'rounded_corner'
    | 'router'
    | 'rowing'
    | 'rss_feed'
    | 'rv_hookup'
    | 'satellite'
    | 'save'
    | 'scanner'
    | 'schedule'
    | 'school'
    | 'screen_lock_landscape'
    | 'screen_lock_portrait'
    | 'screen_lock_rotation'
    | 'screen_rotation'
    | 'screen_share'
    | 'sd_card'
    | 'sd_storage'
    | 'search'
    | 'security'
    | 'select_all'
    | 'send'
    | 'sentiment_dissatisfied'
    | 'sentiment_neutral'
    | 'sentiment_satisfied'
    | 'sentiment_very_dissatisfied'
    | 'sentiment_very_satisfied'
    | 'settings_applications'
    | 'settings_backup_restore'
    | 'settings_bluetooth'
    | 'settings_brightness'
    | 'settings_cell'
    | 'settings_ethernet'
    | 'settings_input_antenna'
    | 'settings_input_component'
    | 'settings_input_composite'
    | 'settings_input_hdmi'
    | 'settings_input_svideo'
    | 'settings'
    | 'settings_overscan'
    | 'settings_phone'
    | 'settings_power'
    | 'settings_remote'
    | 'settings_system_daydream'
    | 'settings_voice'
    | 'share'
    | 'shop'
    | 'shopping_basket'
    | 'shopping_cart'
    | 'shop_two'
    | 'short_text'
    | 'show_chart'
    | 'shuffle'
    | 'signal_cellular_no_sim'
    | 'signal_cellular_null'
    | 'signal_cellular_off'
    | 'signal_wifi_off'
    | 'sim_card_alert'
    | 'sim_card'
    | 'skip_next'
    | 'skip_previous'
    | 'slideshow'
    | 'slow_motion_video'
    | 'smartphone'
    | 'smoke_free'
    | 'smoking_rooms'
    | 'sms_failed'
    | 'sms'
    | 'snooze'
    | 'sort_by_alpha'
    | 'sort'
    | 'space_bar'
    | 'spa'
    | 'speaker_group'
    | 'speaker'
    | 'speaker_notes'
    | 'speaker_notes_off'
    | 'speaker_phone'
    | 'spellcheck'
    | 'star_border'
    | 'star_half'
    | 'star'
    | 'stars'
    | 'stay_current_landscape'
    | 'stay_current_portrait'
    | 'stay_primary_landscape'
    | 'stay_primary_portrait'
    | 'stop'
    | 'stop_screen_share'
    | 'storage'
    | 'store'
    | 'store_mall_directory'
    | 'straighten'
    | 'streetview'
    | 'strikethrough_s'
    | 'style'
    | 'subdirectory_arrow_left'
    | 'subdirectory_arrow_right'
    | 'subject'
    | 'subscriptions'
    | 'subtitles'
    | 'subway'
    | 'supervisor_account'
    | 'surround_sound'
    | 'swap_calls'
    | 'swap_horiz'
    | 'swap_vertical_circle'
    | 'swap_vert'
    | 'switch_camera'
    | 'switch_video'
    | 'sync_disabled'
    | 'sync'
    | 'sync_problem'
    | 'system_update_alt'
    | 'system_update'
    | 'tab'
    | 'tablet_android'
    | 'tablet'
    | 'tablet_mac'
    | 'tab_unselected'
    | 'tag_faces'
    | 'tap_and_play'
    | 'terrain'
    | 'text_fields'
    | 'text_format'
    | 'textsms'
    | 'texture'
    | 'theaters'
    | '3d_rotation'
    | 'thumb_down'
    | 'thumbs_up_down'
    | 'thumb_up'
    | 'timelapse'
    | 'timeline'
    | 'timer_10'
    | 'timer_3'
    | 'timer'
    | 'timer_off'
    | 'time_to_leave'
    | 'title'
    | 'toc'
    | 'today'
    | 'toll'
    | 'tonality'
    | 'touch_app'
    | 'toys'
    | 'track_changes'
    | 'traffic'
    | 'train'
    | 'tram'
    | 'transfer_within_a_station'
    | 'transform'
    | 'translate'
    | 'trending_down'
    | 'trending_flat'
    | 'trending_up'
    | 'tune'
    | 'turned_in'
    | 'turned_in_not'
    | 'tv'
    | 'unarchive'
    | 'undo'
    | 'unfold_less'
    | 'unfold_more'
    | 'update'
    | 'usb'
    | 'verified_user'
    | 'vertical_align_bottom'
    | 'vertical_align_center'
    | 'vertical_align_top'
    | 'vibration'
    | 'video_call'
    | 'videocam'
    | 'videocam_off'
    | 'videogame_asset'
    | 'video_label'
    | 'video_library'
    | 'view_agenda'
    | 'view_array'
    | 'view_carousel'
    | 'view_column'
    | 'view_comfy'
    | 'view_compact'
    | 'view_day'
    | 'view_headline'
    | 'view_list'
    | 'view_module'
    | 'view_quilt'
    | 'view_stream'
    | 'view_week'
    | 'vignette'
    | 'visibility'
    | 'visibility_off'
    | 'voice_chat'
    | 'voicemail'
    | 'volume_down'
    | 'volume_mute'
    | 'volume_off'
    | 'volume_up'
    | 'vpn_key'
    | 'vpn_lock'
    | 'wallpaper'
    | 'warning'
    | 'watch'
    | 'watch_later'
    | 'wb_auto'
    | 'wb_cloudy'
    | 'wb_incandescent'
    | 'wb_iridescent'
    | 'wb_sunny'
    | 'wc'
    | 'web_asset'
    | 'web'
    | 'weekend'
    | 'whatshot'
    | 'widgets'
    | 'wifi'
    | 'wifi_lock'
    | 'wifi_tethering'
    | 'work'
    | 'wrap_text'
    | 'youtube_searched_for'
    | 'zoom_in'
    | 'zoom_out'
    | 'zoom_out_map';

export interface IconProps {
    name: IconNames;
    style?: React.CSSProperties;
    skin?: string;
}

export default class Icon extends React.Component<IconProps> {}
