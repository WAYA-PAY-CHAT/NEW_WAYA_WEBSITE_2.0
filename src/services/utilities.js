import draftToHtml from "draftjs-to-html";
import { convertToRaw } from "draft-js";
import htmlToDraft from 'html-to-draftjs';
import { ContentState } from "draft-js";

export const getHtml = editorState => draftToHtml(convertToRaw(editorState.getCurrentContent()));

export const getRawData = editor => {
  const blocksFromHtml = htmlToDraft(editor);
  const { contentBlocks, entityMap } = blocksFromHtml;
  const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
  return contentState
}

export const dummyRequest = ({ onSuccess }) => {
  setTimeout(() => {
    onSuccess("ok");
  }, 0)
}