import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import store from './redux/store/index';

function Root(props) {
    const childRef = useRef();
    /*return (
        <h4>Hello World</h4>
    );*/
    return (
        <Provider store={store}>
            {/*<ApolloProvider client={client}>
                <Dialog
                    open={modalOpen}
                    onClose={handleModalClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title"></DialogTitle>
                    <DialogContent>
                        ログインの有効期限が切れました。
                        <br />
                        再ログインしてください。
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleLogin} color="primary" autoFocus>
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>
                <App ref={childRef} />
            </ApolloProvider>*/}
            <App ref={childRef} />
        </Provider>
    );
}

ReactDOM.render(<Root />, document.getElementById('root'));
