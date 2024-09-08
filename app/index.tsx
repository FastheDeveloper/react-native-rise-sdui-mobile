import { Rise } from '@rise-tools/react';
import { Stack, Link } from 'expo-router';
import { View } from 'react-native';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';
import { modelSource } from '~/src/modelSource';
import { useRiseActions } from '~/src/riseActions';
import { components } from '~/src/riseComponents';

export default function Home() {
  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      <Rise
        modelSource={modelSource}
        components={components}
        path="HomeScreen"
        actions={useRiseActions()}
      />
    </View>
  );
}
