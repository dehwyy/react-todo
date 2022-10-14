import {createContext} from 'react';
import {todoListProps} from "./interfaces";

export const TodoContext = createContext<todoListProps>({} as todoListProps)