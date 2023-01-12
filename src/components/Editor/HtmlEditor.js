import React, {useContext} from 'react';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/snippets/html";
import "ace-builds/src-min-noconflict/ext-language_tools";

import {EditorContext} from "../../context/context";

const HtmlEditor = () => {

    const {html, setHtml} = useContext(EditorContext)


    return (
        <AceEditor
            placeholder='Write your HTML code here'
            mode='html'
            theme='monokai'
            name='editor_html'
            fontSize={16}
            value={html}
            onChange={value => setHtml(value)}
            height={'100%'}
            width={'100%'}
            showPrintMargin={false}
            showGutter={false}
            highlightActiveLine={true}
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                tabSize: 2
            }}
        />
    );
};

export default HtmlEditor;