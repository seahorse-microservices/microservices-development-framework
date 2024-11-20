"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var os = require("node:os");
// Function to execute a command and log the output in real-time
function executeCommand(command, args) {
    var currentOperatingSystemIsWindows = (os.platform() == 'win32');
    return new Promise(function (resolve, reject) {
        var childProcess;
        if (currentOperatingSystemIsWindows)
            childProcess = (0, child_process_1.spawn)('cmd', __spreadArray(['/c', command], args, true), { stdio: 'inherit' });
        else
            childProcess = (0, child_process_1.spawn)(command, args, { stdio: 'inherit' });
        childProcess.on('close', function (code) {
            if (code !== 0) {
                reject(new Error("".concat(command, " exited with code ").concat(code)));
            }
            else {
                resolve();
            }
        });
    });
}
// Main function to handle NestJS and Angular CLI commands
function runCLI() {
    return __awaiter(this, void 0, void 0, function () {
        var args, projectName, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    args = process.argv.slice(2);
                    if (!(args[0] === 'new' && args[1])) return [3 /*break*/, 6];
                    projectName = args[1];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    console.log("Creating a new NestJS project: ".concat(projectName));
                    return [4 /*yield*/, executeCommand('nest', ['new', "".concat(projectName, "-backend")])];
                case 2:
                    _a.sent();
                    console.log("Creating a new Angular project: ".concat(projectName));
                    return [4 /*yield*/, executeCommand('ng', ['new', "".concat(projectName, "-frontend"), '--no-standalone'])];
                case 3:
                    _a.sent();
                    console.log('Both projects created successfully!');
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    if (error_1 instanceof Error)
                        console.error("Error: ".concat(error_1.message));
                    return [3 /*break*/, 5];
                case 5: return [3 /*break*/, 7];
                case 6:
                    console.log('Usage: node cli.js new <project-name>');
                    _a.label = 7;
                case 7: return [2 /*return*/];
            }
        });
    });
}
// Run the CLI
runCLI();