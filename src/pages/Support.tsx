import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonMenuButton, IonButton  } from '@ionic/react';
import { connect } from '../data/connect';
import { Route, Switch } from 'react-router';
import SupportModal from './SupportModal';

interface OwnProps { }

interface DispatchProps { }

interface SupportProps extends OwnProps, DispatchProps { }

const Support: React.FC<SupportProps> = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Support</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton href="/support/new">New Support Ticket</IonButton>
      </IonContent>
      <Switch>
        <Route path="/support/new" exact component={SupportModal} />
      </Switch>
    </IonPage>
  );
};

export default connect<OwnProps, {}, DispatchProps>({
  component: Support
})