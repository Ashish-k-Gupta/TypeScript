import { Book } from "./TypeQueries/data/book";
import { fetchRecord } from "./TypeQueries/lib/registry";

const book = fetchRecord('book', 'bk_123')
const magazine = fetchRecord('magazine', 'bk_123')