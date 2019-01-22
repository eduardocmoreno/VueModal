# Vuejs Modal Plugin

####  Add the modal tag as the first child in the App.vue
```html
<template>
  <div>
    <modal></modal>
    <!-- other contents -->
  </div>
</template>
```

#### Call modal
Event click:
```html
<button @click="modal({ options })"></button>
```

Programmatic:
```javascript
//Simple modal
this.modal({
  title: 'Title of the modal',
  content: '<p>some content as HTML</p> or just text',
  onOpen: console.log('modal is shown')
});

//Close modal (just pass options as empty)
this.modal();

//Components
import Component from '@/components/Component.vue';

this.modal({
  title: 'Title of the modal',
  component: Component,
  props: {
    prop1: 'prop1',
    prop2: 'prop2',
    ...
  }
});

```

## Options
option | value
------ | -----
title | string
content | string (text or html)
component | object (imported component)
props | object (props of imported component)
onOpen | function (callback fn after modal open)