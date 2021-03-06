/**
 * Generate Account/Explain seed/ secret numbers steps

 */

import React, { Component } from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';

// components
import { Button, InfoMessage, Spacer, Footer } from '@components';
import { Images } from '@common/helpers/images';

import Localize from '@locale';

// style
import { AppStyles } from '@theme';

import { GenerateSteps, AccountObject } from '@screens/Account/Add/Generate/types';

/* types ==================================================================== */
export interface Props {
    account: AccountObject;
    goBack: (step?: GenerateSteps, settings?: AccountObject) => void;
    goNext: (step?: GenerateSteps, settings?: AccountObject) => void;
}

export interface State {}

/* Component ==================================================================== */
class SeedExplanationStep extends Component<Props, State> {
    render() {
        const { goNext } = this.props;

        return (
            <SafeAreaView testID="account-generate-explanation-private" style={[AppStyles.pageContainerFull]}>
                <View style={[AppStyles.centerAligned, AppStyles.marginBottomSml]}>
                    <Image style={[AppStyles.emptyIcon]} source={Images.ImageSecretWarning} />
                </View>

                <View style={[AppStyles.contentContainer, AppStyles.centerAligned, AppStyles.paddingSml]}>
                    <Text style={[AppStyles.baseText, AppStyles.textCenterAligned]}>
                        {Localize.t('account.privateKeyRowsDesc')}
                    </Text>

                    <Spacer size={30} />

                    <Text style={[AppStyles.baseText, AppStyles.textCenterAligned]}>
                        {Localize.t('account.writeDownPrivateKey')}
                    </Text>

                    <Spacer size={20} />

                    <InfoMessage type="error" label={Localize.t('account.neverSharePrivateKey')} />
                    <Spacer size={20} />
                </View>

                <Footer style={[AppStyles.row]}>
                    <View style={[AppStyles.flex5]}>
                        <Button
                            testID="next-button"
                            textStyle={AppStyles.strong}
                            label={Localize.t('global.nextIUnderstand')}
                            onPress={() => {
                                goNext('ViewPrivateKey');
                            }}
                        />
                    </View>
                </Footer>
            </SafeAreaView>
        );
    }
}

/* Export Component ==================================================================== */
export default SeedExplanationStep;
