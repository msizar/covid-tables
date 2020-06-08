
import { withA11y } from '@storybook/addon-a11y';
import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator, configure } from '@storybook/react';



addDecorator(withKnobs);
addDecorator(withA11y);


addDecorator(centered);
// addDecorator(story => <Container>{story()}</Container>);

configure(require.context('../src', true, /\.stories\.js$/), module);