"use client";
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import Heading from '@tiptap/extension-heading'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import Dropcursor from '@tiptap/extension-dropcursor'
import Image from '@tiptap/extension-image'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Document from '@tiptap/extension-document'
import ImageResize from 'tiptap-extension-resize-image'
export const Editor = () => {
    const editor = useEditor({
        editorProps:{
            attributes:{
                style: "padding-left: 56px; padding-right: 56px",
                class: "focus:outline-none print:border-0 bg-white border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] print:w-[100%] pt-10 pr-14 pb-10 cursor-text"
            }
        },
        extensions: [
            StarterKit,
            TaskList,
            TaskItem.configure({
                nested: true
            }),
            Heading.configure({
                levels: [1, 2, 3],
            }),
            Table.configure({
                resizable: true,
              }),
            TableRow,
            TableHeader,
            TableCell,
            Dropcursor,
            Document, 
            Paragraph, 
            Text, 
            Image,
            ImageResize
        ],
        content: `
            <p>Hello World! 🌎️</p>
            <table>
            <tbody>
                <tr>
                <th>Name</th>
                <th colspan="3">Description</th>
                </tr>
                <tr>
                <td>Cyndi Lauper</td>
                <td>Singer</td>
                <td>Songwriter</td>
                <td>Actress</td>
                </tr>
            </tbody>
            </table>
             <p>Try to drag around the image. While you drag, the editor should show a decoration under your cursor. The so called dropcursor.</p>
            <img src="https://placehold.co/800x400" />
        `,
      })
    return (
        <div className="size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 print:bg-white print:overflow-visible">
            <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
                <EditorContent editor={editor} />
            </div>
        </div>
    );
};

