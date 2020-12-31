import React, { PureComponent } from 'react'

export default class Footer extends PureComponent {
    render() {
        return (
            <div>
              <footer className="main-footer">
                <div className="float-right d-none d-sm-block">
                  <b>Version</b> 3.1.0-rc
                </div>
                <strong>Copyright © 2014-2020 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
              </footer>
              <aside className="control-sidebar control-sidebar-dark">
              </aside>
            </div>
        )
    }
}
