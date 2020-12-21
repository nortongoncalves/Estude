import React, {
  useCallback,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';

import {Animated} from 'react-native';

export interface IViewAnimatedHeightHandles {
  open: () => void;
  close: () => void;
  visible: boolean;
}

interface IProp {
  children: React.ReactNode;
}

const ViewAnimatedHeight: React.ForwardRefRenderFunction<
  IViewAnimatedHeightHandles,
  IProp
> = ({children}, ref) => {
  const [visible, setVisible] = useState(false);
  const heightAnimation = useRef(new Animated.Value(0)).current;

  const open = useCallback(() => {
    setVisible(true);
    Animated.timing(heightAnimation, {
      toValue: 180,
      duration: 400,
      useNativeDriver: false,
    }).start();
  }, [heightAnimation]);

  const close = useCallback(() => {
    Animated.timing(heightAnimation, {
      toValue: 0,
      duration: 400,
      useNativeDriver: false,
    }).start(() => {
      setVisible(false);
    });
  }, [heightAnimation]);

  useImperativeHandle(ref, () => ({open, close, visible}));

  return (
    <Animated.View style={{height: heightAnimation, overflow: 'hidden'}}>
      {children}
    </Animated.View>
  );
};

export default forwardRef(ViewAnimatedHeight);
