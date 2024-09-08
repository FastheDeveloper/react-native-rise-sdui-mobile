import { Rise } from '@rise-tools/react';
import { Stack, Link } from 'expo-router';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';
import { modelSource } from '~/src/modelSource';
import { useRiseActions } from '~/src/riseActions';
import { components } from '~/src/riseComponents';

export default function Home() {
  return (
    <>
      <Rise
        modelSource={modelSource}
        components={components}
        path="HomeScreen"
        actions={useRiseActions()}
      />
    </>
  );
}
