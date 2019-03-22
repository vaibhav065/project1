"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_videoplayer_1 = require("nativescript-videoplayer");
element_registry_1.registerElement("VideoPlayer", function () { return nativescript_videoplayer_1.Video; });
var AudioComponent = /** @class */ (function () {
    function AudioComponent(page) {
        this.page = page;
    }
    AudioComponent.prototype.ngOnInit = function () {
    };
    AudioComponent.prototype.ngAfterViewInit = function () {
        this.videoPlayer = this.page.getViewById('nativeVideoPlayer');
    };
    AudioComponent.prototype.play = function () {
        this.videoPlayer.play();
    };
    AudioComponent.prototype.pause = function () {
        this.videoPlayer.pause();
    };
    AudioComponent.prototype.seekToTime = function () {
    };
    AudioComponent = __decorate([
        core_1.Component({
            selector: 'ns-audio',
            templateUrl: './audio.component.html',
            styleUrls: ['./audio.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], AudioComponent);
    return AudioComponent;
}());
exports.AudioComponent = AudioComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXVkaW8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGdDQUErQjtBQUMvQiwwRUFBd0U7QUFDeEUscUVBQWlEO0FBRWpELGtDQUFlLENBQUMsYUFBYSxFQUFFLGNBQU0sT0FBQSxnQ0FBSyxFQUFMLENBQUssQ0FBQyxDQUFDO0FBUTVDO0lBRUMsd0JBQXFCLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUksQ0FBQztJQUVuQyxpQ0FBUSxHQUFSO0lBR0EsQ0FBQztJQUNELHdDQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELDZCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCw4QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsbUNBQVUsR0FBVjtJQUVBLENBQUM7SUF0QlksY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztZQUNwQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzt5Q0FHMEIsV0FBSTtPQUZuQixjQUFjLENBd0IxQjtJQUFELHFCQUFDO0NBQUEsQUF4QkQsSUF3QkM7QUF4Qlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcbmltcG9ydCB7IFZpZGVvIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXZpZGVvcGxheWVyJztcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lJztcbnJlZ2lzdGVyRWxlbWVudChcIlZpZGVvUGxheWVyXCIsICgpID0+IFZpZGVvKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtYXVkaW8nLFxuICB0ZW1wbGF0ZVVybDogJy4vYXVkaW8uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hdWRpby5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG59KVxuZXhwb3J0IGNsYXNzIEF1ZGlvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdmlkZW9QbGF5ZXI6IGFueTtcbiBjb25zdHJ1Y3RvciggcHJpdmF0ZSBwYWdlOiBQYWdlKSB7IH1cblxuICBuZ09uSW5pdCgpICA6IHZvaWQgIHtcblxuICAgIFxuICB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnZpZGVvUGxheWVyID0gdGhpcy5wYWdlLmdldFZpZXdCeUlkKCduYXRpdmVWaWRlb1BsYXllcicpO1xufVxuXG5wbGF5KCkge1xuICAgIHRoaXMudmlkZW9QbGF5ZXIucGxheSgpO1xufVxuXG5wYXVzZSgpIHtcbiAgICB0aGlzLnZpZGVvUGxheWVyLnBhdXNlKCk7XG59XG5cbnNlZWtUb1RpbWUoKSB7XG5cbn1cblxufVxuIl19