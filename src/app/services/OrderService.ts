import axios from "axios";
import { sereverAPI } from "../../lib/config";

class OrderService {
    private readonly path: string;

    constructor() {
        this.path = sereverAPI;
    }
}

export default OrderService;