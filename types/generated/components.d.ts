import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksEventSlider extends Struct.ComponentSchema {
  collectionName: 'components_blocks_event_sliders';
  info: {
    displayName: 'EventSlider';
  };
  attributes: {
    events: Schema.Attribute.Relation<'oneToMany', 'api::event.event'>;
  };
}

export interface BlocksEventsList extends Struct.ComponentSchema {
  collectionName: 'components_blocks_events_lists';
  info: {
    displayName: 'EventsList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    events: Schema.Attribute.Relation<'oneToMany', 'api::event.event'>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksHistory extends Struct.ComponentSchema {
  collectionName: 'components_blocks_histories';
  info: {
    displayName: 'History';
    icon: 'bulletList';
  };
  attributes: {
    history_items: Schema.Attribute.Relation<
      'oneToMany',
      'api::history-item.history-item'
    >;
    shortDescription: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlocksTextImage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_text_images';
  info: {
    description: '';
    displayName: 'TextImage';
  };
  attributes: {
    bgDark: Schema.Attribute.Boolean;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'files' | 'images'>;
    ImageFirst: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
  };
}

export interface BlocksVideo extends Struct.ComponentSchema {
  collectionName: 'components_blocks_videos';
  info: {
    displayName: 'Video';
  };
  attributes: {
    title: Schema.Attribute.String;
    videoUrl: Schema.Attribute.Text;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSocial extends Struct.ComponentSchema {
  collectionName: 'components_shared_socials';
  info: {
    displayName: 'social';
  };
  attributes: {
    link: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.event-slider': BlocksEventSlider;
      'blocks.events-list': BlocksEventsList;
      'blocks.history': BlocksHistory;
      'blocks.text-image': BlocksTextImage;
      'blocks.video': BlocksVideo;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.social': SharedSocial;
    }
  }
}
