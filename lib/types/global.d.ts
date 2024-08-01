// GPT generated type extension for THREE.Group to be used with <motion>
import { Group } from 'three';
import { ComponentType } from 'react';
import { CustomDomComponent, HTMLMotionComponents, SVGMotionComponents } from 'framer-motion';

declare module 'framer-motion' {
  interface CustomMotionComponents {
    group: CustomDomComponent<ComponentType<Group>>;
  }
  
  const motion: (<Props extends {}>(
    Component: string | ComponentType<PropsWithChildren<Props>>,
    customMotionComponentConfig?: CustomMotionComponentConfig
  ) => CustomDomComponent<Props>) & HTMLMotionComponents & SVGMotionComponents & CustomMotionComponents;
}
