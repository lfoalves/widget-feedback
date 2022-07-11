import React from 'react';
import { 
    View,
    TextInput,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import { ArrowLeft } from 'phosphor-react-native';

import { FeedbackType } from '../../components/Widget';
import { ScreenshotButton } from '../ScreenshotButton';
import { Button } from '../Button';

import { styles } from './styles';
import { theme } from '../../theme';
import {feedbackTypes} from '../../utils/feedbackTypes'

interface Props {
    feedbackType: FeedbackType;
}

export function Form({ feedbackType } : Props) {

    const feedbackInfo = feedbackTypes[feedbackType]

  return (
    <View style={styles.container}>

        <View style={styles.header}>
            <TouchableOpacity>
                <ArrowLeft
                    size={24}
                    weight='bold'
                    color={theme.colors.text_secondary}
                 />

            </TouchableOpacity>]

            <View style={styles.titleContainer}>
                <Image 
                    source={feedbackInfo.image}
                    style={styles.image}
                />
                <Text style={styles.titleText}>
                    {feedbackInfo.title}

                </Text>
            </View>
        </View>

        <TextInput
            multiline
            style={styles.input}
            placeholder='Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo'
            placeholderTextColor={theme.colors.text_secondary}
        />

        <View style={styles.footer}>
            <ScreenshotButton 
                onTakeShot={()=> {}}
                onRemoveShot={() => {}}
                screenshot='https://github.com/lfoalves.png'
            />

            <Button
                isLoading={false}
            />
        </View>

    </View>
  );
}