import React, { ReactElement } from "react";
import { BasicLayout } from "@ant-design/pro-layout";
interface Props {}

function App({}: Props): ReactElement {
  return (
    <BasicLayout
      menuDataRender={() => [
        {
          Path: "/",
          Name: "welcome",
          Icon: "smile",
          Children: [
            {
              Path: "/welcome",
              Name: "one",
              Children: [
                {
                  Path: "/welcome/welcome",
                  Name: "two",
                  Icon: "smile",
                  Exact: true,
                },
              ],
            },
          ],
        },
      ]}
      menuItemRender={(menuItemProps, defaultDom) =>
        menuItemProps.isUrl ? defaultDom : <a>open {defaultDom}</a>
      }
    >
      Hello World
    </BasicLayout>
  );
}

export default App;
